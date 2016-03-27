'use strict';

/**
 * @ngdoc service
 * @name momTravelApp.packages
 * @description
 * # packages
 * Service in the momTravelApp.
 */
angular.module('momTravelApp')
  .service('packAGES', function ($resource,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://localhost:3000/services/packageDeal.json',{
        query:{method:'GET',params:{packId:'packs'},isArray:true}
      });
   


 });
