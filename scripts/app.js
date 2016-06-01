angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'app.commonConstants', 'ngSanitize'])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
    }])
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
                    "viewUserCodeSamples": {
                        templateUrl: 'views/common/viewUserCodeSamples.html',
                        controller: 'userCodeSamplesController'
                    },
                    "viewUserBio": {
                        templateUrl: 'views/common/viewUserBio.html',
                        controller: 'viewUserBioController'
                    },
                    "viewFeaturedProject": {
                        templateUrl: 'views/common/viewFeaturedProject.html',
                        controller: 'viewFeaturedProjectController'
                    }
                }
            })
    })
    .controller('mainController', ['$scope', '$filter', 'profile_code_descs', '$uibModal', function($scope, $filter, profile_code_descs, $uibModal) {
        $scope.profileCodeReview = profile_code_descs;

        $scope.navTabs = [
            {name:"Code samples", view:"viewUserCodeSamples"},
            {name:"About me", view:"viewUserBio"}
        ];

        $scope.programmingLanguages = [
            {name:"Angular", selected:true},
            {name:"Node", selected:true},
            {name:"D3", selected:true},            
            {name:"jQuery", selected:true},
            {name:"AMD", selected:true},
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

        $scope.openReviewModal = function (size, resourceIndex) {
            console.log(resourceIndex);
            $scope.reviewData = $scope.profileCodeReview[resourceIndex];
            console.log($scope.reviewData);

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './views/myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    reviewData: function () {
                     return $scope.reviewData;
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
    .controller('userCodeSamplesController', function($scope) {
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
    .controller('viewUserBioController', function($scope) {

    })
    .controller('viewFeaturedProjectController', function($scope) {

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.isCollapsed = false;

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;

        //TODO: Update to populate from an image directory
        $scope.slides = [
            {
                id:1,
                image: "//assets/wedding-app-screen.png"
            }
        ];

        var slides = $scope.slides = [];

        var currIndex = 0;

        $scope.addSlide = function(img,text) {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: img,
                text: text,
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        /*for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }*/
        $scope.addSlide('assets/wedding-app-screen.png', 'Wedding app');
        $scope.addSlide('assets/wedding-app-screen2.png', 'Side menu');

        // Randomize logic below
        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }

        console.log($scope.slides);


    })
    .controller('ModalInstanceCtrl', function($scope, $uibModalInstance, reviewData) {
        console.log(reviewData);
        $scope.codeReview = reviewData;

      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

    });