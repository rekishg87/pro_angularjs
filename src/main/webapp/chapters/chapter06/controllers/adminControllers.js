/**
 * Created by Rekish on 8/25/2015.
 */

angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:5500/users/login")
    .controller("authCtrl", ['$scope', '$http', '$location', 'authUrl',
        function($scope, $http, $location, authUrl) {

            $scope.authenticate = function(user, pass) {
                $http.post(authUrl, {
                    username: user,
                    password: pass
                }, {
                    withCredentials: true
                }).success(function (data) {
                    $location.path("/main");
                }).error(function(error) {
                    $scope.authenticationError = error;
                });
            }
    }]);
