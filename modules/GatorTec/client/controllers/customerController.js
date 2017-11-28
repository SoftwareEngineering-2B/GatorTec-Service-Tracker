(function(){
  'use strict';

  angular.module('customer', [])
  .controller('customerController', ['$scope', 'httpAPI', 'authAPI', function($scope, httpAPI, authAPI) {

    httpAPI.getAllRepairOrdersByEmail().then(function(response){

      $scope.repairOrders = response;
      $scope.currentDevice = response[0];
      $scope.progress1 = "100";
      if(response[0].status == "Device Received"){
        $scope.progress2 = "0";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "On Bench"){
        $scope.progress2 = "50";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "Waiting for Customer"){
        $scope.progress2 = "50";
        $scope.progress3 = "0";
        // POP UP
        modal.style.display = "block";
      }
      else if(response[0].status == "Parts Ordered"){
        $scope.progress2 = "100";
        $scope.progress3 = "0";
      }
      else if(response[0].status == "Ready"){
        $scope.progress2 = "100";
        $scope.progress3 = "75";
      }
      else if(response[0].status == "Invoiced"){
        $scope.progress2 = "100";
        $scope.progress3 = "100";
      }
      $scope.repairOrders.sort(function(a,b){
        return a.sroID - b.sroID;
      });

    });

    var modal = document.getElementById('alertModal');
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    $scope.switchDevice = function(repairOrder) {
      $scope.currentDevice = repairOrder;
      if(repairOrder.status == "Device Received"){
        $scope.progress2 = "0";
        $scope.progress3 = "0";
      }
      else if(repairOrder.status == "On Bench"){
        $scope.progress2 = "50";
        $scope.progress3 = "0";
      }
      else if(repairOrder.status == "Waiting for Customer"){
        $scope.progress2 = "50";
        $scope.progress3 = "0";
        // POP UP
        modal.style.display = "block";
      }
      else if(repairOrder.status == "Parts Ordered"){
        $scope.progress2 = "100";
        $scope.progress3 = "0";
      }
      else if(repairOrder.status == "Ready"){
        $scope.progress2 = "100";
        $scope.progress3 = "75";
      }
      else if(repairOrder.status == "Invoiced"){
        $scope.progress2 = "100";
        $scope.progress3 = "100";
      }
    }

    $scope.logout = function(){
      authAPI.logout();
    };

  }]);
})();
