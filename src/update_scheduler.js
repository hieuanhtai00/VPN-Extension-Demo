/**
 * @module ./update_scheduler
 */

var update_task = require("./update_task");

var REFRESH_TIMEOUT = 6 * 3600 * 1000;
var RETRY_TIMEOUT = 5 * 60 * 1000;

var retryTimeout = RETRY_TIMEOUT;
var refreshTimeout = REFRESH_TIMEOUT;

function run() {
    var task;
    var canceled = false;

    var timeoutId = setTimeout(function () {
        console.log("retry");
        run(); // TODO schedule on next tick
        canceled = true;
        if (task) {
            task.cancel();
        }
    }, retryTimeout);

    task = update_task.start(function (err) {
        if (err) {
            console.warn(
                "Error updating severs, retrying in " +
                    retryTimeout / (60 * 1000) +
                    " minutes",
                err
            );
            // nothing; retry will be triggered anyway
            return;
        }
        if (canceled) {
            console.error(
                "Attempting to complete an already-canceled update task"
            );
            return;
        }

        clearTimeout(timeoutId);
        setTimeout(function () {
            console.log("refresh");
            // TODO(grig): possible parallel task executions?
            run();
        }, refreshTimeout);
    });
}

exports.init = function init(options) {
    console.log("init");
    options = options || {};
    retryTimeout = options.retryTimeout || retryTimeout;
    refreshTimeout = options.refreshTimeout || refreshTimeout;

    setTimeout(run, 0);
};
