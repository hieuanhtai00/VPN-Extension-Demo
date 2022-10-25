/**
 * Manages list of servers
 *
 * TODO(grig): transaction / last known good support
 *
 * @module ./server_list
 */

var ga = require("./ga");

var defaultConfig = require("./config").proxy.settings || {};

/*
 * TODO(grig): test callback status
 */
exports.set = function set(value, callback) {
    var error = validate(value);
    if (error) {
        throw new ValidationError(error);
    }
    try {
        localStorage.currentConfig = JSON.stringify(value);
        if (typeof callback === "function") {
            setTimeout(function () {
                callback(null);
            }, 0);
        }
    } catch (e) {
        if (typeof callback === "function") {
            setTimeout(function () {
                callback(e);
            }, 0);
        }
    }
};

function validate(settings) {
    if (typeof settings !== "object" || settings === null) {
        return "settings should be an object";
    }

    if (!settings.hasOwnProperty("countries")) {
        return 'settings should have a "countries" property';
    }

    var config = settings.countries;
    if (Object.keys(config).length === 0) {
        return "config should have at least one key (country)";
    }
    for (var countryCode in config) {
        if (!config.hasOwnProperty(countryCode)) {
            continue;
        }
        var country = config[countryCode];
        if (
            !Array.isArray(country.servers) &&
            !Array.isArray(country.premium_servers)
        ) {
            return "country must have either 'servers' or 'premium_servers' fields set to an array of servers";
        }

        var error;
        if (Array.isArray(country.servers)) {
            error = validateServers(country.servers);
            if (error) {
                return error;
            }
        }

        if (Array.isArray(country.premium_servers)) {
            error = validateServers(country.premium_servers);
            if (error) {
                return error;
            }
        }
    }
    return null;
}

function validateServers(servers) {
    for (var i = 0; i < servers.length; i++) {
        var server = servers[i];
        if (typeof server.host !== "string") {
            return "server must have a 'host' property";
        }
        if (
            !(
                typeof server.port === "string" ||
                typeof server.port === "number"
            )
        ) {
            return "server must have a 'port' property";
        }
    }
    return null;
}

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message || "";
    this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

/*
 * TODO(grig): test no countries in default config
 * TODO(grig): test no proxy config
 * TODO(grig): test errors
 */
exports.get = function get(callback) {
    var value = localStorage.currentConfig;
    if (typeof value === "string") {
        try {
            var currentConfig = JSON.parse(value);
            var error = validate(currentConfig);
            if (error) {
                throw new ValidationError(error);
            }
            setTimeout(function () {
                callback(null, currentConfig || defaultConfig);
            }, 0);
        } catch (e) {
            var version = "n/a";
            if (chrome.runtime && chrome.runtime.getManifest()) {
                version = chrome.runtime.getManifest().version;
            }
            var message = e.toString();
            try {
                // find application-level file name and line number from the stack
                var stack = e.stack.split("\n");
                for (var i = 0; i < stack.length; i++) {
                    if (/ at .*\.js:.*/.test(stack[i])) {
                        message = message + stack[i];
                        break;
                    }
                }
            } catch (_) {
                // nothing
            }
            ga.trackEvent("error", version, message, 0, false);

            console.warn(
                "invalid current configuration, fall back to default: ",
                e
            );
            delete localStorage.currentConfig;
            setTimeout(function () {
                callback(null, defaultConfig);
            }, 0);
        }
    } else {
        setTimeout(function () {
            callback(null, defaultConfig);
        }, 0);
    }
};

exports.clear = function (callback) {
    delete localStorage.currentConfig;
    if (typeof callback === "function") {
        setTimeout(callback, 0);
    }
};
