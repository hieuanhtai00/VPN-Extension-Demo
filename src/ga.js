var config = require("./config").ga;

if (config.enabled) {
    global._gaq = global._gaq || [];
    _gaq.push(["_setAccount", config.tracking_id]);
    _gaq.push(["_trackPageview"]);

    var ga = {
        trackEvent: function (category, action, label, value, noninteraction) {
            // Track events only in production
            console.log(
                "Track event: " +
                    JSON.stringify([
                        category,
                        action,
                        label,
                        value,
                        noninteraction,
                    ])
            );
            if (
                chrome.i18n.getMessage("@@extension_id") === config.extension_id
            ) {
                _gaq.push([
                    "_trackEvent",
                    category,
                    action,
                    label,
                    value,
                    noninteraction,
                ]);
            }
        },
    };
} else {
    var ga = {
        trackEvent: function () {
            console.log("ga.trackEvent", "[DISABLED]", arguments);
        },
    };
}

module.exports = ga;
