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

app.run(['$rootScope', function($rootScope) {
    var previousUrl;
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
        if (previousUrl && previousUrl === newUrl) {
            alert("sorry cant go back!!");
            event.preventDefault();
        } else {
            previousUrl = oldUrl;
        }
    });
}]);