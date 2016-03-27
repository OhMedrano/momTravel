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
