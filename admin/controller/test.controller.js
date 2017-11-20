app.controller("test", ["$scope", "http", "$rootScope", "$http", "$location", "$interval", "$filter", function($scope, http, $rootScope, $http, $location, $interval, $filter) {

    // $rootScope.$on('$locationChangeStart', function(event, next, current) {
    //     // Here you can take the control and call your own functions:
    //     alert('Sorry ! Back Button is disabled');
    //     // Prevent the browser default action (Going back):
    //     event.preventDefault();
    // });

    $rootScope.a = false;
    $scope.initial = 0;
    $scope.answers = [];
    $scope.limit = localStorage.getItem('numberCount');
    var a = {};
    $scope.form1;
    $scope.subMitQues = function(val) {
        creteAnswerSet(val);
    }

    function creteAnswerSet(val) {
        if ($scope.limit != 0) {
            $scope.limit--;
            let countN = 0;
            a = {
                question: val.ques,
                answers: [{
                        id: countN,
                        data: val.ans1
                    },
                    {
                        id: ++countN,
                        data: val.ans2
                    }, {
                        id: ++countN,
                        data: val.ans3
                    }, {
                        id: ++countN,
                        data: val.ans4
                    }
                ],
                correct: val.ans5,
                time: val.time1
            }
            $scope.answers.push(a);
        }
        if ($scope.limit == 0) {
            localStorage.setItem("questionSet", JSON.stringify($scope.answers));
        }
    }
    $scope.locationRedirect = function() {
        $location.path('fillDetails');
    }
}]);