/**
 * @module ./update_task
 */

var server_list = require("./server_list");
var proxy = require("./proxy");
var browsec = require("./browsec");

exports.start = function update(callback) {
    console.log("update");

    var task = (function () {
        var canceled = false;
        var subtask;

        subtask = browsec.servers(function (err, servers) {
            if (err) {
                if (typeof callback === "function") {
                    callback(err);
                }
                return;
            }
            if (canceled) {
                if (typeof callback === "function") {
                    callback("canceled");
                }
                return;
            }
            server_list.set(servers, function (err) {
                if (err) {
                    if (typeof callback === "function") {
                        callback(err);
                    }
                    return;
                }
                if (canceled) {
                    if (typeof callback === "function") {
                        callback("canceled");
                    }
                    return;
                }
                if (proxy.connected(localStorage)) {
                    // update proxy settings
                    var currentCountry = proxy.lastConnected(localStorage);
                    proxy.setProxySettings(currentCountry, function (result) {
                        if (canceled) {
                            if (typeof callback === "function") {
                                callback("canceled");
                            }
                            return;
                        }

                        if (typeof callback === "function") {
                            if (result) {
                                callback();
                            } else {
                                callback(
                                    new Error("failed to update proxy settings")
                                );
                            }
                        }
                    });
                } else {
                    if (canceled) {
                        if (typeof callback === "function") {
                            callback("canceled");
                        }
                        return;
                    } else {
                        if (typeof callback === "function") {
                            callback(null);
                            return;
                        }
                    }
                }
            });
        });
        var task = {
            cancel: function cancel() {
                canceled = true;
                if (subtask) {
                    subtask.cancel();
                }
            },
        };
        return task;
    })();
    return task;
};
