var $ = require("jquery");

function internationalize(str) {
    return str.replace(/__MSG_(.+)__/g, function (m, key) {
        return chrome.i18n.getMessage(key);
    });
}

function internationalizePage() {
    document.title = internationalize(document.title);
    document.getElementsByTagName("body")[0].innerHTML = internationalize(
        document.getElementsByTagName("body")[0].innerHTML
    );
}

$(document).ready(function () {
    internationalizePage();
});
