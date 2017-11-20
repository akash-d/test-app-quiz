app.controller("details", ["$scope", "$rootScope", "$location", "http", function($scope, $rootScope, $location, http) {
    $rootScope.a = false;
    http.callAPi('user-details.json').then(function(resp) {
        fetchDetails(resp.data.data.data);
    });

    function fetchDetails(value) {
        $scope.jobTitle = value.job_role;
        $scope.yearExp = value.experience;
    }

    $scope.changeLocation = function() {
        // fullscreen();
        $location.path('test');
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