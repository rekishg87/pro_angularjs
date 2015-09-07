/**
 * Created by Rekish on 9/7/2015.
 */

describe("Controller Test", function() {

    // Arrange
    var mockScope, controller, backend, mockInterval, mockTimeout;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
            [{"name": "Apples", "categrory": "Fruit", "price": 1.20 },
                {"name": "Bananas", "categrory": "Fruit", "price": 2.42 },
                {"name": "Pears", "categrory": "Fruit", "price": 2.02 }]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http,
            $interval, $timeout) {
        mockScope = $rootScope.$new();
        mockInterval = $interval;
        mockTimeout = $timeout;
        $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http,
            $interval: mockInterval,
            $timeout: mockTimeout
        });
        backend.flush();
    }));

    // Act and Asses
    it("Creates variable", function() {
        expect(mockScope.counter).toEqual(0);
    });

    it("Increment counter", function() {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Makes an Ajax request", function() {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes the data", function() {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Preserves the data order", function() {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });

    it("Limits interval to 10 updates", function() {
        for(var i = 0; i < 11; i++) {
            mockInterval.flush(5000);
        }
        expect(mockScope.intervalCounter).toEqual(10);
    });

    it("Increments timer counter", function() {
        mockTimeout.flush(5000);
        expect(mockScope.timerCounter).toEqual(1);
    })

});
