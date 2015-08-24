/**
 * Created by Rekish on 8/24/2015.
 */

angular.module("sportsStore")
    .controller("sportsStoreCtrl", ['$scope', function($scope) {
        $scope.data = {
            products: [
                {name: "Product #1", description: "A Product",
                    category: "Category #1", price: 100},
                {name: "Product #2", description: "A Product",
                    category: "Category #1", price: 110},
                {name: "Product #3", description: "A Product",
                    category: "Category #2", price: 210},
                {name: "Product #4", description: "A Product",
                    category: "Category #3", price: 202}
            ]};
    }]);
