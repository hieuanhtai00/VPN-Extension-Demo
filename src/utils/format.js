// Helper functions
function format(str, args) {
    return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        return format(this, arguments);
    };
}

module.exports = format;
