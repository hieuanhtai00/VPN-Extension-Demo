var proxy = require("./proxy");

var ui = {
    setUiConnectionStatus: function (connected) {
        if (connected) {
            chrome.browserAction.setIcon({ path: "images/icon-enabled.png" });
            // chrome.browserAction.setTitle({title: chrome.i18n.getMessage('browser_action_active_title')});
        } else {
            chrome.browserAction.setIcon({ path: "images/icon-disabled.png" });
            // chrome.browserAction.setTitle({title: chrome.i18n.getMessage('browser_inaction_active_title')});
        }
    },

    updateUiConnectionStatus: function () {
        proxy.checkProxySet(
            function (isConnected) {
                this.setUiConnectionStatus(isConnected);
            }.bind(this)
        );
    },
};

module.exports = ui;
