app.controller("details", ["$scope", "$rootScope", "$location", "http", function($scope, $rootScope, $location, http) {
    $rootScope.a = false;

    

    $scope.changeLocation = function() {
        // fullscreen();
        $location.path('test');
        localStorage.setItem('numberCount', $scope.numberVal);
    }

    // function fullscreen() {
    //     var el = document.documentElement,
    //         rfs = el.requestFullscreen ||
    //         el.webkitRequestFullScreen ||
    //         el.mozRequestFullScreen ||
    //         el.msRequestFullscreen;

    //     rfs.call(el);
    // }

}]);