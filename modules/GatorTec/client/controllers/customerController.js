(function(){
  'use strict';

  angular.module('customer', [])
  .controller('customerController', ['$scope', 'httpAPI', function($scope, httpAPI) {

    httpAPI.getAllRepairOrdersByEmail().then(function(response){
      $scope.repairOrders = response;
      $scope.repairOrders.sort(function(a,b){
        return a.sroID - b.sroID;
      });
    });

  }]);
})();
