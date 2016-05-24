angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'app.commonConstants', 'ngSanitize'])
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
    .config(function($stateProvider, $urlRouterProvider, $sceProvider) {

        $sceProvider.enabled(false);
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
    .controller('mainController', ['$scope', '$filter', 'profile_code_descs', '$uibModal', function($scope, $filter, profile_code_descs, $uibModal) {
        $scope.profileCodeReview = profile_code_descs;

        $scope.programmingLanguages = [
            {name:"Angular", selected:true},
            {name:"Node", selected:true},
            {name:"D3", selected:true},            
            {name:"jQuery", selected:true},
            {name:"CSS", selected:true},
            {name:"HTML5", selected:true},
            {name:"SQL", selected:true},
            {name:"JSON", selected:true},
            {name:"Bootstrap", selected:true},
            {name:"Coldfusion", selected:true}
        ];

        $scope.displayCodeReview = function(skills){
            var returnStatus = false;
            var codeSkills = skills;
            angular.forEach($scope.programmingLanguages, function(value, key){
                if($scope.programmingLanguages[key].selected === true){
                    var result = $filter('filter')(codeSkills, $scope.programmingLanguages[key].name);
                    if(result.length > 0){
                        returnStatus = true;
                    }
                }
            });
            return returnStatus;
        };

        $scope.updateSkillStatus = function(index){
            if($scope.programmingLanguages[index].selected){
                $scope.programmingLanguages[index].selected = false;
            }else{
                $scope.programmingLanguages[index].selected = true;
            }
        };

        $scope.animationsEnabled = true;

        $scope.openReviewModal = function (size, srcUrl) {
            $scope.srcUrl = srcUrl;

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './views/myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    codeUrl: function () {
                     return srcUrl;
                     }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };


    }])
.controller('userDetailsController', function($scope) {
    $scope.oneAtATime = true;

    $scope.isCollapsed = true;

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

})
.controller('ModalDemoCtrl', function($scope, $uibModal) {

  $scope.animationsEnabled = true;

  /*$scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };*/

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

})
.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, codeUrl) {

    $scope.getSafeUrl = function(url){
        var safeUrl = url;

        return safeUrl;
    };
    $scope.codeUrl = $scope.getSafeUrl(codeUrl);


  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };    

});