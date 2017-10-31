(function(){
  'use strict';

  angular.module('admin', [])
  .controller('adminControllerCustomers', ['$scope', 'httpAPI', function($scope, httpAPI) {

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

    $scope.delete = function(sroID){
      httpAPI.deleteRepairOrder(sroID).then(function(response){
        for(let i in $scope.customers){
          if($scope.customers[i].sroID == sroID){
            $scope.customers.splice(i,1);
          }
        }
      });
    };

  }])
  .controller('adminControllerUsers', ['$scope', 'httpAPI', function($scope, httpAPI) {

    $scope.employees = [];

    httpAPI.getAllUsers().then(function(response){
      $scope.employees = response;
    });

    $scope.add = function(username, userPassword, userRole){
      // httpAPI.addUser(username, userPassword, userRole);
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

  }])
  .controller('adminControllerDatabase', ['$scope', 'httpAPI', function($scope, httpAPI) {

  }]);
})();
