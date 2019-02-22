'use strict';

angular.module('app').service('dataService', ['$http', '$timeout', '$q', function ($http, $timeout, $q) {
    const api_config = {
        host: "apiadmin.musto.io"
    };

    this.getArticles = function () {
        var deferred = $q.defer();

        var request = $http({
            method: "get",
            url: `http://${api_config.host}/api/articles`
        });

        request.then(
            function(response) {
                console.log(response);
                deferred.resolve(response);
            }
        );

        return deferred.promise;
    };

}]);
