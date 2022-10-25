var ga = require("../ga");

// Error handler
window.onerror = function (message, filename, lineno) {
    try {
        console.error(
            "message: {0}\nfilename: {1}\nlineno: {2}".format(
                message,
                filename,
                lineno
            )
        );

        var version = "n/a";
        if (chrome.runtime.getManifest()) {
            version = chrome.runtime.getManifest().version;
        }
        ga.trackEvent(
            "error",
            version,
            "{0} at {1}:{2}".format(message, filename, lineno),
            0,
            false
        );
    } catch (e) {
        console.error(e);
    }

    return false;
};
