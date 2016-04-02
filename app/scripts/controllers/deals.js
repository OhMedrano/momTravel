'use strict';

/**
 * @ngdoc function
 * @name momTravelApp.controller:DealsCtrl
 * @description
 * # DealsCtrl
 * Controller of the momTravelApp
 */
angular.module('momTravelApp')
  .controller('DealsCtrl', function ($scope,$routeParams,$location,Deals) {

  	$scope.find = function(){
  		$scope.deal = Deals.query();
  	};


   
  });
