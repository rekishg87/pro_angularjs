/**
 * Created by Rekish on 9/7/2015.
 */

angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope) {

        $scope.counter = 0;

        $scope.incrementCounter = function() {
            $scope.counter++;
        }
    });
