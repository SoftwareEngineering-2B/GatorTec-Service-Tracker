(function(){
  'use strict';

  angular.module('technician', [])
  .controller('technicianController', ['$scope', 'httpAPI', function($scope, httpAPI) {
     $scope.customers =[];

     httpAPI.getAllRepairOrders().then(function(response){
       $scope.customers = response;
      //  console.log($scope.customers);
     });

     $scope.blacklist = function(sroID){
       console.log(sroID);
      //  httpAPI.blacklistRepairOrder(sroID);
     };

     $scope.unblacklist = function(sroID){
       console.log(sroID);
      //  httpAPI.unblacklistRepairOrder(sroID);
     };

     console.log($scope.customers);



    // httpAPI.blacklistRepairOrder();
    // httpAPI.unblacklistRepairOrder();

  }]);
})();
