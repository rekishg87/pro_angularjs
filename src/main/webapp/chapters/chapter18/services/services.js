/**
 * Created by Rekish on 9/1/2015.
 */

angular.module("customServices", [])
    .factory("logService", function() {
        var messageCount = 0;
        return {
            log: function(msg) {
                console.log("(LOG + " + messageCount++ + ")" + msg);
            }
        };
    });