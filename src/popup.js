require("./common");
require("./i18n");
require("./select");
var Spinner = require("./spin.js");

var $ = require("jquery");
var ga = require("./ga");

var bp = chrome.extension.getBackgroundPage();

var proxy = bp.proxy;
var browsec = bp.browsec;

function updatePage() {
    var connected = proxy.connected();

    console.log("Update page with connected = " + connected);

    if (!connected) {
        $(".content-box-other").removeClass("active");
    } else {
        $(".content-box-other").addClass("active");
        $("select option[value='" + connected + "']").attr(
            "selected",
            "selected"
        );
        $("select").select("destroy").select();
    }
}

$(document).ready(function () {
    console.time("ipinfo");
    browsec.ipInfo(function (data) {
        $(".country").html(
            chrome.i18n.getMessage("popup_your_location") + data.country_name
        );
    });
    console.timeEnd("ipinfo");

    console.time(".link-on click");
    $(".link-on").click(function () {
        var lastConnected = proxy.lastConnected();
        console.log("Set last connected proxy: " + lastConnected);
        proxy.setProxySettings(lastConnected, function () {
            updatePage();
        });
        ga.trackEvent("extension", "enable");
    });
    console.timeEnd(".link-on click");

    console.time(".link-off click");
    $(".link-off").click(function () {
        proxy.clearProxySettings(function () {
            updatePage();
        });
        ga.trackEvent("extension", "disable");
    });
    console.timeEnd(".link-off click");

    console.time("update page");
    updatePage();
    console.timeEnd("update page");

    console.time("select change");
    $("select").change(function () {
        var selectedCountryCode = $("select option:selected").val();
        proxy.setProxySettings(selectedCountryCode);
        ga.trackEvent("extension", "change_country", selectedCountryCode);
    });
    console.timeEnd("select change");

    $(".link-appstore").click(function (e) {
        ga.trackEvent("extension", "appstore", e.target.text);
    });
    // $(".link-support").click(function () {
    //   $("select option[value='nl']").attr("selected", "selected");
    //   $('select').select('destroy').select();
    // });

    // spinner must be started after select.js has created the .selectmenu element
    var countrySpinner = new Spinner({ scale: 0.5 }).spin(
        document.querySelector(".selectmenu")
    );
    proxy.countryCodes(function (countryCodes) {
        countrySpinner.stop();
        var countryNames = [];
        console.time("update select");
        countryCodes.forEach(function (countryCode) {
            var countryName = chrome.i18n.getMessage(
                "country_name_" + countryCode.toUpperCase()
            );
            if (countryName === "" || typeof countryName === "undefined") {
                var locale = "n/a";
                if (typeof chrome.i18n.getUILanguage === "function") {
                    locale = chrome.i18n.getUILanguage();
                }
                var version = "n/a";
                if (chrome.runtime.getManifest()) {
                    version = chrome.runtime.getManifest().version;
                }
                var message =
                    "failed to look up country name for: " +
                    countryCode +
                    " with locale: " +
                    locale +
                    " at popup.js";
                console.warn(message);
                ga.trackEvent("error", version, message, 0, false);
                countryName = countryCode.toUpperCase() || "N/A";
            }
            countryNames.push({ code: countryCode, name: countryName });
        });
        countryNames.sort(function (a, b) {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });

        var select = $("select").empty();
        $.each(countryNames, function (index, country) {
            select.append($("<option />").val(country.code).text(country.name));
        });
        console.timeEnd("update select");
        updatePage();
    });
});
