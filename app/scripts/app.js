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
  .config(function ($routeProvider) {
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
  });
