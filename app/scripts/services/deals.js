'use strict';

/**
 * @ngdoc service
 * @name momTravelApp.packages
 * @description
 * # packages
 * Service in the momTravelApp.
 */
angular.module('momTravelApp')
  .service('Deals', function ($resource,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://localhost:3000/api/deals',{
        query:{method:'GET',params:{dealId:'deals'},isArray:true}
      });
   


 });
