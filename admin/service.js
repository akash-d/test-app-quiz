app.factory('http', ['$http', "$q", function($http, $q) {

    function callAPi(val) {
        var deferred = $q.defer();
        $http({
            url: val,
            method: 'GET'
        }).then(function(resp) {
                deferred.resolve({
                    data: resp
                })
            },
            function() {
                alert("no data")
            }
        );
        return deferred.promise;
    }
    return {
        callAPi: callAPi
    }

}]);