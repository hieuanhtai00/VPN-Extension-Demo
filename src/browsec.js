var $ = require("jquery");
var config = require("./config").browsec;
var ga = require("./ga");

var browsec = (function () {
    var apiPrefix =
        config.apiPrefix || "https://d1blmth2c5vbem.cloudfront.net/v1/";
    var locationApiPrefix =
        config.locationApiPrefix || "http://d1blmth2c5vbem.cloudfront.net/v1/";

    return {
        init: function () {
            $.ajaxSetup({
                tryCount: 0,
                retryLimit: 1,
                timeout: 10000,
                retry: function () {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return true;
                    } else {
                        return false;
                    }
                },
            });
        },

        checkCredentials: function (username, password) {
            try {
                console.group("checkCredentials");

                var result = false;

                $.ajax({
                    type: "POST",
                    url: apiPrefix + "auth",
                    data: {
                        email: username,
                        password: password,
                    },
                    async: false,
                    success: function (data, textStatus, jqXHR) {
                        console.log("Response status: %d", data.status);
                        if (data.status === 0) {
                            result = true;
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (!this.retry()) {
                            ga.trackEvent(
                                "check_credentials_error",
                                textStatus,
                                errorThrown
                            );
                            throw errorThrown;
                        }
                    },
                });

                return result;
            } finally {
                console.groupEnd();
            }
        },

        clearCredentials: function () {
            delete localStorage.userId;
            delete localStorage.email;
            delete localStorage.password;
        },

        ipInfo: function (callback) {
            var start;

            $.ajax({
                type: "GET",
                url:
                    locationApiPrefix +
                    "location?locale=" +
                    chrome.runtime.getManifest().current_locale,
                async: true,
                success: function (data, textStatus, jqXHR) {
                    callback(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    this.retry();
                },
                beforeSend: function () {
                    start = Date.now();
                },
                complete: function () {
                    var duration = Date.now() - start;
                    console.debug("Location request duration %d ms", duration);
                },
            });
        },

        signup: function () {
            try {
                console.group("Signing up new user");

                var result = null;

                $.ajax({
                    type: "POST",
                    url: apiPrefix + "signup",
                    async: false,
                    success: function (data, textStatus, jqXHR) {
                        console.log("Response status: %d", data.status);
                        if (data.status === 0) {
                            result = data.result;
                        } else {
                            ga.trackEvent("error_signup", data);
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (!this.retry()) {
                            ga.trackEvent(
                                "error_signup",
                                textStatus,
                                errorThrown
                            );
                        }
                    },
                });

                return result;
            } finally {
                console.groupEnd();
            }
        },

        servers: function (callback) {
            var canceled = false;

            var xhr = $.ajax({
                type: "GET",
                url: apiPrefix + "servers",
                async: true,
                success: function (data, textStatus, jqXHR) {
                    if (canceled) {
                        if (typeof callback === "function") {
                            callback("canceled");
                        }
                        return;
                    }

                    if (typeof callback === "function") {
                        callback(null, data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (canceled) {
                        // Aborted request return textStatus == 'abort', errorThrown == 'abort'.
                        // We might have checked for these statuses; however, once a task
                        // has been canceled, any status should be ignored.
                        console.log(
                            "servers",
                            "request canceled: status:",
                            textStatus,
                            "error:",
                            errorThrown
                        );
                        // may check for XHR
                        if (typeof callback === "function") {
                            callback("canceled");
                        }
                        return;
                    }
                    var error = { status: textStatus, error: errorThrown };
                    console.error("browsec.servers", JSON.stringify(error));
                    ga.trackEvent(
                        "error",
                        "browsec.servers",
                        JSON.stringify(error)
                    );
                    callback(error);
                },
            });
            var task = {
                cancel: function () {
                    canceled = true;
                    xhr.abort();
                },
            };
            return task;
        },
    };
})();

module.exports = browsec;
