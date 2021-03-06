(function(){
  'use strict';

  angular.module('technician', [])
  .controller('technicianController', ['$scope', 'httpAPI','authAPI', function($scope, httpAPI,authAPI) {

     $scope.customers = [];

     httpAPI.getAllRepairOrders().then(function(response){
       $scope.customers = response;
       $scope.customers.sort(function(a,b){
         return a.sroID - b.sroID;
       });
     });

     $scope.blacklist = function(sroID){
       httpAPI.blacklistRepairOrder(sroID).then(function(response){
         for(let i in $scope.customers){
           if($scope.customers[i].sroID == sroID){
             $scope.customers[i].blacklist = true;
           }
         }
       });
     };

     $scope.unblacklist = function(sroID){
       httpAPI.unblacklistRepairOrder(sroID).then(function(response){
         for(let i in $scope.customers){
           if($scope.customers[i].sroID == sroID){
             $scope.customers[i].blacklist = false;
           }
         }
       });
     };

     $scope.logout = function(){
       authAPI.logout();
     };

  }]);

})();
