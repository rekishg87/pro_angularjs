/**
 * Created by Rekish on 9/7/2015.
 */

describe("Controller Test", function() {

    // Arrange
    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope = $rootScope.$new();
        controller = $controller("defaultCtrl", {
            $scope: mockScope
        });
    }));

    // Act and Asses
    it("Creates variable", function() {
        expect(mockScope.counter).toEqual(0);
    });

    it("Increment counter", function() {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });
});
