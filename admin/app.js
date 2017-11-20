var app = angular.module("app", ['ngRoute', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/fillDetails", {
            templateUrl: "details.html",
            controller: "details"
        })
        .when("/test", {
            templateUrl: "test.html",
            controller: "test"
        })
        .when("/result", {
            templateUrl: "result.html",
            controller: "result"
        })
        .otherwise("/", {})
});