var $ = require("jquery");
require("./common");
var proxy = (global.proxy = require("./proxy"));

var scheduler = (global.scheduler = require("./update_scheduler"));

chrome.proxy.settings.onChange.addListener(proxy.onChange.bind(proxy));

var ui = (global.ui = require("./ui"));

var browsec = (global.browsec = require("./browsec"));
var ga = require("./ga");
browsec.init();

chrome.webRequest.onAuthRequired.addListener(
    function (details, callback) {
        try {
            console.group("onAuthRequired");
            console.log(details);

            if (
                details.isProxy &&
                details.realm == "Browsec" &&
                (details.challenger.host == "postlm.com" ||
                    details.challenger.host.endsWith(".postlm.com") ||
                    details.challenger.host == "postls.com" ||
                    details.challenger.host.endsWith(".postls.com"))
            ) {
                var username = localStorage.userId || localStorage.email;
                var password = localStorage.password;

                // If we don't have username/password
                // OR
                // username is email and password is incorrect
                if (
                    !username ||
                    !password ||
                    (username.indexOf("@") > 0 &&
                        checkAuthLimitExceeded(details))
                ) {
                    var result = browsec.signup();

                    if (result) {
                        delete localStorage.email;
                        localStorage.userId = username = result.user_id;
                        localStorage.password = password = result.password;
                    } else {
                        proxy.clearProxySettings();
                        alert(chrome.i18n.getMessage("signup_error"));
                        return;
                    }
                }

                console.log("Authenticate with username '%s'", username);
                callback({
                    authCredentials: { username: username, password: password },
                });
            } else {
                // If auth request is not from browsec proxy, do not handle it.
                callback();
            }
        } finally {
            console.groupEnd();
        }
    },
    { urls: ["<all_urls>"] },
    ["asyncBlocking"]
);

var statusLineRegexp = new RegExp("^HTTP/1.[01] 408");
chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        if (localStorage.connected && localStorage.connected != "off") {
            if (statusLineRegexp.test(details.statusLine)) {
                ga.trackEvent("extension", "http_error", details.statusLine);
            }
        }
    },
    { urls: ["<all_urls>"] }
);

function checkAuthLimitExceeded(details) {
    var timeFrameMs = 15000;
    var authRequestsLimit = 3;
    var authHistory = localStorage.authHistory
        ? JSON.parse(localStorage.authHistory)
        : {};

    try {
        console.group("checkAuthLimitExceeded");

        var hostAuthHistory = authHistory[details.challenger.host];
        if (
            !hostAuthHistory ||
            !hostAuthHistory.periodStart ||
            !hostAuthHistory.authRequestsNum
        ) {
            hostAuthHistory = authHistory[details.challenger.host] = {
                periodStart: details.timeStamp,
                authRequestsNum: 1,
            };
            console.log(
                "No host auth history. Create record: %s",
                JSON.stringify(hostAuthHistory)
            );
        } else {
            console.log(
                "Host history record already exists: %s",
                JSON.stringify(hostAuthHistory)
            );
            var periodStart = hostAuthHistory.periodStart;
            if (details.timeStamp - periodStart > timeFrameMs) {
                console.log("Time frame already finished. Create new row.");
                hostAuthHistory.periodStart = details.timeStamp;
                hostAuthHistory.authRequestsNum = 1;
            } else {
                console.log(
                    "We are still in tracked time frame. Increase auth requests counter"
                );
                hostAuthHistory.authRequestsNum++;

                if (hostAuthHistory.authRequestsNum >= authRequestsLimit) {
                    console.log(
                        "Limit exceeded. Return true and clear host auth history."
                    );

                    delete hostAuthHistory.periodStart;
                    delete hostAuthHistory.authRequestsNum;

                    ga.trackEvent(
                        "auth_request_limit_exceeded",
                        localStorage.userId || localStorage.email
                    );

                    return true;
                }
            }
        }

        return false;
    } finally {
        console.log("Save auth history: %O", authHistory);
        localStorage.authHistory = JSON.stringify(authHistory);
        console.groupEnd();
    }
}

chrome.runtime.onInstalled.addListener(function (details) {
    console.log("chrome.runtime.onInstalled", details);

    ga.trackEvent(
        "extension",
        details.reason,
        chrome.runtime.getManifest().version
    );

    if (details.reason == "install") {
        proxy.detectDefaultCountry(function () {
            proxy.setProxySettings(proxy.lastConnected(), function (result) {
                // Workaroung for Chrome bug
                $.ajax({
                    url: "http://www.google.com/favicon.ico",
                    cache: false,
                    complete: function (jqXHR, textStatus) {
                        console.log("Complete test request: %s", textStatus);
                    },
                });
            });
        });
    } else if (details.reason == "update") {
        var previousVersion = details.previousVersion;
        var currentVersion = chrome.runtime.getManifest().version;

        if (previousVersion <= "2.2.99" && currentVersion >= "2.3.0") {
            // Upgrade from 2.2 and earlier up to 2.3 and later
            if (proxy.connected() === "de") {
                proxy.setProxySettings("uk");
            }
        } else {
            if (proxy.connected()) {
                proxy.setProxySettings(proxy.lastConnected(), function () {
                    ui.updateUiConnectionStatus();
                });
            }
        }
    } else {
        if (proxy.connected()) {
            proxy.setProxySettings(proxy.lastConnected(), function () {
                ui.updateUiConnectionStatus();
            });
        }
    }

    ui.updateUiConnectionStatus();
});

chrome.proxy.onProxyError.addListener(function (details) {
    proxy.checkProxySet(function (isConnected) {
        if (isConnected) {
            console.error("Proxy on error: " + JSON.stringify(details));
            ga.trackEvent("extension", "proxy_error", JSON.stringify(details));
        }
    });
});

chrome.runtime.onStartup.addListener(function () {
    console.log("chrome.runtime.onStartup");

    delete localStorage.lastRedirectOnError;
    ui.updateUiConnectionStatus();
    ga.trackEvent("extension", "start", chrome.runtime.getManifest().version);
});

// TODO if/when we switch to event page, this should be changed
scheduler.init();
