(function(){
  'use strict';

  angular.module('technician', [])
  .controller('technicianController', ['$scope', 'httpAPI', function($scope, httpAPI) {
     $scope.customers =[];

     httpAPI.getAllRepairOrders().then(function(response){
       $scope.customers = response;
       console.log($scope.customers);
     });

     console.log($scope.customers);


    // httpAPI.blacklistRepairOrder();
    // httpAPI.unblacklistRepairOrder();

  }]);
})();
