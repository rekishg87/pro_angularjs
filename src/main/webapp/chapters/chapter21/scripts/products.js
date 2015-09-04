/**
 * Created by Rekish on 9/3/2015.
 */

angular.module("exampleApp", [])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function($scope, $http, baseUrl) {
        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.listProducts = function() {
            $http.get(baseUrl).success(function(data) {
                $scope.products = data;
            });
        };

        $scope.deleteProduct = function(product) {
            var url = baseUrl + product.id;
            $http({
                method: "DELETE",
                url: baseUrl + product.id
            }).success(function() {
                $scope.products.splice($scope.products.indexOf(product), 1);
                console.log("Product id: " + product.id);
                console.log("Url: " + url);
            }).error(function() {
                console.log("Error Product id: " + product.id);
                console.log("Url: " + url);
            })

        }

        $scope.createProduct = function(product) {
            $http.post(baseUrl, product).success(function (newProduct)  {
                $scope.products.push(newProduct);
                $scope.displayMode = "list";
            });
        }

        $scope.updateProduct = function(product) {
            $http({
                url: baseUrl + product.id,
                method: "PUT",
                data: product
            }).success(function (modifiedProduct) {
                for (var i = 0; i < $scope.products.length; i++) {
                    if ($scope.products[i].id == modifiedProduct.id) {
                        $scope.products[i] = modifiedProduct;
                        break;
                    }
                }
                $scope.displayMode = "list";
            });
        }

        $scope.editOrCreateProduct = function(product) {
            $scope.currentProduct =
                product ? angular.copy(product) : {};
            $scope.displayMode = "edit";
        };

        $scope.saveEdit = function(product) {
            if(angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        };

        $scope.cancelEdit = function() {
            $scope.currentProduct = {};
            $scope.displayMode = "list";
        };

        $scope.listProducts();
    });

