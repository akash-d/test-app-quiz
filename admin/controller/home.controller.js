app.controller("home", ["$scope", "$rootScope", "$location", function($scope, $rootScope, $location) {
    $rootScope.a = true;
    $scope.changeLocation = function() {
        // fullscreen();
        $location.path('fillDetails');
    }
}]);