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
