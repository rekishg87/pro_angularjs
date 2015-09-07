/**
 * Created by Rekish on 9/7/2015.
 */

angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope, $http, $interval, $timeout, $log) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;

        $interval(function() {
            $scope.intervalCounter++;
        }, 5, 10);

        $timeout(function() {
            $scope.timerCounter++;
        }, 5);

        $http.get("productData.json").success(function (data) {
            $scope.products = data;
        });

        $scope.counter = 0;

        $scope.incrementCounter = function() {
            $scope.counter++;
        }
    });
