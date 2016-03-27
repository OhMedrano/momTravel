'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:PackdetailCtrl
 * @description
 * # PackdetailCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('PackdetailCtrl', function ($scope,$routeParams,packAGES,$http) {
  		$scope.packId = $routeParams.storeId;


  		$http.get('http://localhost:3000/services/packageDeal.json').success(function(data){
  			$scope.pack = data.filter(function(entry){
  				return entry.id === $scope.packId;
  			})[0];
  		});
  });
