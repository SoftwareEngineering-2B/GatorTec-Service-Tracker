(function(){
  'use strict';

  angular.module('technician', [])
  .controller('technicianController', ['$scope', 'httpAPI', function($scope, httpAPI) {

     $scope.customers = [];

     httpAPI.getAllRepairOrders().then(function(response){
       $scope.customers = response;
     });

     $scope.blacklist = function(sroID){
      //  httpAPI.blacklistRepairOrder(sroID);
     };

     $scope.unblacklist = function(sroID){
      //  httpAPI.unblacklistRepairOrder(sroID);
     };

  }]);
})();
