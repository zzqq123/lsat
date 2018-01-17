app.service('baseConfig',['$http','$q',function($http,$q) {
    this.ajax = function(url,data) {
        var defer = $q.defer();
        $http({
            url:url,
            method:'GET'
        }).then(function(data) {
            defer.resolve(data);
        },function(err) {
            defer.reject(err);
        })
        return defer.promise;
    }
}])