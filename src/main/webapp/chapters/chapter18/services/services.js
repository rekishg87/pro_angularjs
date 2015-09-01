/**
 * Created by Rekish on 9/1/2015.
 */

angular.module("customServices", [])
    .provider("logService", function() {
        return {
            $get: function() {
                return {
                    messageCount: 0,
                    log: function(msg) {
                        console.log("Debug: " + (this.messageCount++) + " " + msg);
                    }
                };
            }
        }
    });
