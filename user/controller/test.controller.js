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
    var finalAnswer = [];
    $scope.currentQues = 1;
    $scope.totalQues = 0;

    http.callAPi('data.json').then(function(resp) {
        retrieveData(resp.data);
    });

    function retrieveData(value) {
        $scope.jsonData = value.data.data;
        $scope.generateTemplate($scope.initial);
        $scope.lengthOF = $scope.jsonData.length - 1;
        $scope.totalQues = $scope.lengthOF + 1;
        localStorage.removeItem("answers");
    }

    $scope.generateTemplate = function(val) {
        $scope.selectedVal = false;
        angular.forEach($scope.jsonData, function(key, value) {
            if (value == $scope.initial) {
                $scope.title = key.title;
                $scope.optionArray = key.option;
                $scope.correct = key.correct;
                $scope.timeLeft = parseInt(key.maxTime);
                startCounter($scope.timeLeft);
            }
        });
    }

    function startCounter(val) {
        var val1 = val;
        $scope.Timer = $interval(function() {
            if (val1 != 0) {
                val1--;
                $scope.timeLeft = val1;
            } else if (val1 == 0) {
                clearNow();
                $scope.subMitAnswer();
            }
        }, 1000);

        function clearNow() {
            $scope.stopTimer();
        }
    }

    $scope.stopTimer = function() {
        $interval.cancel($scope.Timer);
    }

    $scope.subMitAnswer = function() {
        $scope.initial++;
        $scope.generateTemplate($scope.initial);
        if ($scope.currentQues < $scope.totalQues) {
            $scope.currentQues++;
        } else {
            $scope.generateResult();
        }
    }

    $scope.someSelected = function(val) {
        let answerObj = {};
        if ($scope.correct == val) {
            answerObj.comment = "right";
            answerObj.id = val;
        } else {
            answerObj.comment = "wrong";
            answerObj.id = val;
        }
        $scope.selectedVal = true;
        finalAnswer.push(answerObj);
    }

    $scope.generateResult = function() {
        localStorage.setItem('answers', JSON.stringify(finalAnswer));
        $location.path("/result")
    }

}]);