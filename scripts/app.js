angular.module('app', ['ui.bootstrap', 'ui.router', 'ngAnimate'])
    .run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
)
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "index.html",
                views: {
                    "userDetails": {
                        templateUrl: 'views/common/viewUserDetails.html',
                        controller: 'userDetailsController'
                    }/*,
                    "mainView": {
                        templateUrl: 'faq/faq.html',
                        controller: 'faqController'
                    }*/
                }
            })




    })
    .controller('mainController', function($scope) {
        $scope.programmingLanguages = {
            angular : true,
            coldfusion : true,
            nodejs : true,
            sql : true,
            jquery: true
        };

        console.log($scope.programmingLanguages);

    })
.controller('userDetailsController', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

        console.log($scope.status);


});