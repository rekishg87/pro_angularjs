/**
 * Created by Rekish on 26-8-2015.
 */

var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller("dayCtrl", function($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function($scope, days) {
    $scope.day = days.tomorrow;
})
