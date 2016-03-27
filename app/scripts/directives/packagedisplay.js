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
