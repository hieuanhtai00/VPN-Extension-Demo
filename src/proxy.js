var ga = require("./ga");
var weightedShuffle = require("./array").weightedShuffle;
var config = require("./config").proxy;
var servers = require("./server_list");

var proxy = (function () {
    var bypassList = ["google-analytics.com"];

    var pacScript =
        'function domainIs(host,domain){return host==domain||dnsDomainIs(host,"."+domain)}function FindProxyForURL(url,host){var config="{0}";var bypass={1};host=host.toLowerCase();if(isPlainHostName(host)||isInNetEx(host,"127.0.0.0/8")||isInNetEx(host,"10.0.0.0/8")||isInNetEx(host,"172.16.0.0/12")||isInNetEx(host,"192.168.0.0/16")||isInNetEx(host,"fc00::/7")||isInNetEx(host,"fe80::/10")){return"DIRECT"}for(var i=0;i<bypass.length;i++){if(domainIs(host,bypass[i])){return"DIRECT"}}return config}';

    var defaultCountry = config.defaultCountry || "nl";

    function getServerString(countryConfig, altPort) {
        var serverString = "";

        var servers = weightedShuffle(countryConfig.servers);
        /* jshint -W004 */
        for (var i = 0; i < servers.length; i++) {
            var server = servers[i];
            var port = getServerPort(server, altPort);
            serverString += "HTTPS " + server.host + ":" + port + "; ";
        }

        if (countryConfig.backupServers) {
            var backupServers = weightedShuffle(countryConfig.backupServers);
            for (var i = 0; i < backupServers.length; i++) {
                var server = backupServers[i];
                var port = getServerPort(server, altPort);
                serverString += "HTTPS " + server.host + ":" + port + "; ";
            }
        }
        /* jshint +W004 */

        console.log("Srv string: " + serverString);

        return serverString;
    }

    function getServerPort(server, altPort) {
        if (
            altPort &&
            Array.isArray(server.alt_ports) &&
            server.alt_ports.indexOf(altPort) >= 0
        ) {
            return altPort;
        } else {
            return server.port;
        }
    }

    return {
        countryCodes: function (callback, includeHidden) {
            if (typeof includeHidden === "undefined") {
                includeHidden = this.isIncludeHidden();
            }
            servers.get(function (err, settings) {
                if (err) {
                    console.error(err);
                    callback([]);
                    return;
                }

                var countries = settings.countries;
                var countryCodes = Object.keys(countries)
                    .filter(function (countryCode) {
                        return includeHidden || !countries[countryCode].hidden;
                    })
                    .filter(function (countryCode) {
                        return Array.isArray(countries[countryCode].servers);
                    });
                callback(countryCodes);
            });
        },

        isIncludeHidden: function () {
            return (
                localStorage.includeHidden &&
                JSON.parse(localStorage.includeHidden)
            );
        },

        setIncludeHidden: function (value) {
            localStorage.includeHidden = JSON.stringify(value);
        },

        isProxySet: function (config) {
            if (config.levelOfControl == "controlled_by_this_extension")
                if (config.value.mode == "pac_script") return true;

            return false;
        },

        checkProxySet: function (callback) {
            chrome.proxy.settings.get(
                { incognito: false },
                function (config) {
                    var isConnected = this.isProxySet(config);
                    callback(isConnected);
                }.bind(this)
            );
        },

        setProxySettings: function (countryCode, callback) {
            chrome.proxy.settings.get(
                { incognito: false },
                function (config) {
                    if (
                        typeof config != "undefined" &&
                        config.levelOfControl !=
                            "controllable_by_this_extension" &&
                        config.levelOfControl != "controlled_by_this_extension"
                    ) {
                        console.warn(
                            "Proxy settings levelOfControl is: " +
                                config.levelOfControl
                        );
                        ga.trackEvent(
                            "extension",
                            "alert",
                            "error_unable_change_proxy_settings " +
                                config.levelOfControl
                        );
                        alert(
                            chrome.i18n.getMessage(
                                "error_unable_change_proxy_settings"
                            )
                        );

                        if (typeof callback == "function") {
                            callback(false);
                        }
                    } else {
                        var altPort =
                            localStorage.altPort &&
                            Number(localStorage.altPort);
                        servers.get(function (err, settings) {
                            if (err) {
                                callback(false);
                                return;
                            }
                            var countries = settings.countries;
                            var countryConfig = countries[countryCode];
                            if (!countryConfig) {
                                console.warn(
                                    "No servers for country: " +
                                        countryCode +
                                        ", rolling back to default country"
                                );
                                countryCode = defaultCountry;
                                countryConfig = countries[countryCode];
                            }
                            if (!countryConfig) {
                                console.error(
                                    "Failed to find any suitable servers, turning off"
                                );
                                delete localStorage.lastConnected;
                                localStorage.connected = "off";
                                callback(false);
                                return;
                            }
                            var serverString = getServerString(
                                countryConfig,
                                altPort
                            );

                            var proxyConfig = {
                                mode: "pac_script",
                                pacScript: {
                                    data: pacScript.format(
                                        serverString,
                                        JSON.stringify(bypassList)
                                    ),
                                },
                            };

                            chrome.proxy.settings.set(
                                { scope: "regular", value: proxyConfig },
                                function () {
                                    localStorage.connected =
                                        localStorage.lastConnected =
                                            countryCode;

                                    if (typeof callback == "function") {
                                        callback(true);
                                    }
                                }
                            );
                        });
                    }
                }.bind(this)
            );
        },

        clearProxySettings: function (callback) {
            chrome.proxy.settings.clear({ scope: "regular" }, function () {
                localStorage.connected = "off";

                if (typeof callback == "function") {
                    callback(true);
                }
            });
        },

        logProxySettings: function () {
            chrome.proxy.settings.get({ incognito: false }, function (config) {
                console.log(JSON.stringify(config));
            });
        },

        onChange: function (details) {
            console.log("Proxy on change: " + JSON.stringify(details));

            this.checkProxySet(function (isConnected) {
                ui.setUiConnectionStatus(isConnected);

                if (!isConnected) {
                    localStorage.connected = "off";
                }
            });
        },

        connected: function (localStorage) {
            localStorage = localStorage || global.localStorage;
            var status = localStorage.connected;

            if (status === "off") {
                return false;
            } else {
                return status;
            }
        },

        lastConnected: function (localStorage) {
            localStorage = localStorage || global.localStorage;
            return localStorage.lastConnected || defaultCountry;
        },

        detectDefaultCountry: function (callback) {
            browsec.ipInfo(function (location) {
                /* jshint laxbreak:true */
                if (
                    location.continent_code === "NA" ||
                    location.continent_code === "SA"
                ) {
                    // If user isfrom North or South America send him to US server
                    defaultCountry = "us";
                } else if (
                    location.country_code === "SG" || // Singapore
                    location.country_code === "MY" || // Malaysia
                    location.country_code === "ID" || // Indonesia
                    location.country_code === "PH" || // Philippines
                    location.country_code === "TH" // Thailand
                ) {
                    defaultCountry = "sg";
                } else if (
                    location.country_code === "UK" ||
                    location.country_code === "IE"
                ) {
                    defaultCountry = "uk";
                }
                /* jshint laxbreak:false */

                callback();
            });
        },
    };
})();

module.exports = proxy;
