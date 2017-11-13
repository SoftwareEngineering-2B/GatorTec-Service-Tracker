(function(){
  'use strict';

  angular.module('customer', [])
  .controller('customerController', ['$scope', 'httpAPI', function($scope, httpAPI) {

    httpAPI.getAllRepairOrdersByEmail().then(function(response){
      console.log(response);
      $scope.repairOrders = response;
      $scope.currentDevice = response[0];
      $scope.progress1 = "100";
      if(response[0].status == "Received"){
        $scope.progress2 = "0";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "On Bench"){
        $scope.progress2 = "50";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "Parts Ordered"){
        $scope.progress2 = "100";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "Ready"){
        $scope.progress2 = "100";
        $scope.progress3 = "100";
      }
    });

    $scope.switchDevice = function(device) {
      $scope.currentDevice = device;
    }

  }]);
})();
