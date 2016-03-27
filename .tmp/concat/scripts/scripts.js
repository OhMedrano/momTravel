'use strict';

/**
 * @ngdoc overview
 * @name momTravelApp
 * @description
 * # momTravelApp
 *
 * Main module of the application.
 */
angular
  .module('momTravelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/packages', {
        templateUrl: 'views/packages.html',
        controller: 'PackagesCtrl'
      })
      .when('/packages/:storeId', {
        templateUrl: 'views/packdetail.html',
        controller: 'PackdetailCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:PackagesCtrl
 * @description
 * # PackagesCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('PackagesCtrl', ["$scope", "$routeParams", "$http", "packAGES", function ($scope,$routeParams,$http,packAGES) {
  	$scope.packs = packAGES.query({packId:$routeParams.packId});
  			$scope.totalItems = 40;

  	$scope.viewby = 6;
  	console.log($scope.packs.length);
  	$scope.currentPage = 1;
  	$scope.itemsPerPage = $scope.viewby;
  	$scope.maxSize = 4;

  	$scope.setPage = function(pageNo){
  		$scope.currentPage = pageNo;
  	};
  	$scope.pageChanged = function(){
  		console.log("Son, why you playin' yoself, you know you're on page " + $scope.currentPage);
  	};

  	$scope.setItemsPerPage = function(num){
  		$scope.itemsPerPage = num;
  		$scope.currentPage = 1;
  	};

  	

  }]);

'use strict';

/**
 * @ngdoc directive
 * @name momTravelApp.directive:packageDisplay
 * @description
 * # packageDisplay
 */
angular.module('momTravelApp')
  .directive('packageDisplay', function () {
    return {
    	scope:{
    		item: '=item'
    	},
      templateUrl:'templates/packageDisplayDesk.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.$watch('item',function(newVal,oldVal){
        	scope.item = newVal;



        });
      }
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name momTravelApp.packages
 * @description
 * # packages
 * Service in the momTravelApp.
 */
angular.module('momTravelApp')
  .service('packAGES', ["$resource", "$http", function ($resource,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://localhost:3000/services/packageDeal.json',{
        query:{method:'GET',params:{packId:'packs'},isArray:true}
      });
   


 }]);

'use strict';

/**
 * @ngdoc filter
 * @name momTravelApp.filter:startFrom
 * @function
 * @description
 * # startFrom
 * Filter in the momTravelApp.
 */
angular.module('momTravelApp')
  .filter('startFrom', function () {
    return function (input,start) {
      start = +start;
      return  input.slice(start);
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name momTravelApp.directive:sup
 * @description
 * # sup
 */
angular.module('momTravelApp')
  .directive('sup', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sup directive');
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:PackdetailCtrl
 * @description
 * # PackdetailCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('PackdetailCtrl', ["$scope", "$routeParams", "packAGES", "$http", function ($scope,$routeParams,packAGES,$http) {
  		$scope.packId = $routeParams.storeId;


  		$http.get('http://localhost:3000/services/packageDeal.json').success(function(data){
  			$scope.pack = data.filter(function(entry){
  				return entry.id === $scope.packId;
  			})[0];
  		});
  }]);

'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('ContactCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
