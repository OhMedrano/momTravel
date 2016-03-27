'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:PackagesCtrl
 * @description
 * # PackagesCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('PackagesCtrl', function ($scope,$routeParams,$http,packAGES) {
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

  	

  });
