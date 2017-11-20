app.controller("result", ["$scope", function($scope) {
    $scope.count = 0;
    var answer = JSON.parse(localStorage.getItem("answers"));
    angular.forEach(answer, function(key, val) {
        if (key.comment == "right") {
            $scope.count++;
        }
    });
}]);