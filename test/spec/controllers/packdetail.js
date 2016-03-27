'use strict';

describe('Controller: PackdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('momTravelApp'));

  var PackdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackdetailCtrl = $controller('PackdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
