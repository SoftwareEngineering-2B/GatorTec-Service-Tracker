(function(){
  'use strict';

  angular.module('admin', [])
  .controller('adminControllerCustomers', ['$scope', 'httpAPI', function($scope, httpAPI) {

    $scope.customers = [];

    httpAPI.getAllRepairOrders().then(function(response){
      $scope.customers = response;
      console.log($scope.customers);
    });

    $scope.blacklist = function(sroID){
     //  httpAPI.blacklistRepairOrder(sroID);
    };

    $scope.unblacklist = function(sroID){
     //  httpAPI.unblacklistRepairOrder(sroID);
    };

    $scope.delete = function(sroID){
    // httpAPI.deleteRepairOrder(sroID);
  };

  }])
  .controller('adminControllerUsers', ['$scope', 'httpAPI', function($scope, httpAPI) {

    $scope.employees = [];

    httpAPI.getAllUsers().then(function(response){
      $scope.employees = response;
      console.log($scope.employees);
    });

    $scope.add = function(username, userPassword, userRole){
      httpAPI.addUser(username, userPassword, userRole);
    };

    $scope.delete = function(email){
      httpAPI.deleteUser(email);
    };

  }])
  .controller('adminControllerDatabase', ['$scope', 'httpAPI', function($scope, httpAPI) {

  }]);
})();
