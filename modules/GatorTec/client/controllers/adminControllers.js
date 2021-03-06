(function(){
  'use strict';

  angular.module('admin', [])
  .controller('adminControllerCustomers', ['$scope', 'httpAPI', 'authAPI', function($scope, httpAPI, authAPI) {

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
            $scope.customers[i].blacklist = response;
          }
        }
      });
    };

    $scope.unblacklist = function(sroID){
      httpAPI.unblacklistRepairOrder(sroID).then(function(response){
        for(let i in $scope.customers){
          if($scope.customers[i].sroID == sroID){
            $scope.customers[i].blacklist = response;
          }
        }
      });
    };

    $scope.delete = function(sroID){
      httpAPI.deleteRepairOrder(sroID).then(function(response){
        for(let i in $scope.customers){
          if($scope.customers[i].sroID == sroID){
            $scope.customers.splice(i,1);
          }
        }
      });
    };

    $scope.logout = function(){
      authAPI.logout();
    };

    httpAPI.getAllUsers().then(function(response){
      $scope.currentEmployee = response[0];
      $scope.employees = response;
    });


  }])
  .controller('adminControllerUsers', ['$scope', 'httpAPI', 'authAPI', function($scope, httpAPI, authAPI) {

    $scope.employees = [];

    httpAPI.getAllUsers().then(function(response){
      $scope.currentEmployee = response[0];
      $scope.employees = response;
    });

    $scope.add = function(name, username, userPassword, userRole){
      httpAPI.addUser(name, username, userPassword, userRole).then(function(response){
          $scope.employees.push(response);
          $scope.$apply();
        });
    };

    $scope.delete = function(email){
      httpAPI.deleteUser(email).then(function(response){
        for(let i in $scope.employees){
          if($scope.employees[i].username == email){
            $scope.employees.splice(i,1);
          }
        }
      });
    };

    $scope.logout = function(){
      authAPI.logout();
    };

  }])

  .controller('adminControllerDatabase', ['$scope', 'httpAPI', 'authAPI', 'Papa', function($scope, httpAPI, authAPI, Papa) {

    $scope.fileToParse = {};

    $scope.logout = function(){
      authAPI.logout();
    };

    $scope.parseFile = function(){
      Papa.parse($scope.fileToParse).then(function(response){
          httpAPI.addRepairOrders(response.data);
      });
    };

    httpAPI.getAllUsers().then(function(response){
      $scope.currentEmployee = response[0];
      $scope.employees = response;
    });
  }]);
})();
