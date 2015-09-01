/**
 * Created by Rekish on 9/1/2015.
 */

angular.module("customServices", [])
    .factory("logService", function ($log) {
        var messageCount = 0;
        return {
            log: function (msg) {
                $log.log("(LOG + " + this.messageCount++ + ") " + msg);
            }
        };
    });

