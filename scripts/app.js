angular.module('app', ['ui.bootstrap', 'ngAnimate'])
    .controller('mainController', function($scope) {
        $scope.programmingLanguages = {
            angular : true,
            coldfusion : true,
            nodejs : true,
            sql : true
        };

        console.log($scope.programmingLanguages);
    });