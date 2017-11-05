(function(){
  'use strict';

  angular.module('httpService', [])
  .service('httpAPI', ['$http', '$state', function($http, $state) {

     this.getAllRepairOrders = function(){
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/repairOrder/getAllRepairOrders'
      })
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        return response;
      });
    };

    this.getAllRepairOrdersByEmail = function(email){

      let body = email;

      return $http({
        method: 'POST',
        url: 'http://localhost:8080/repairOrder/getAllRepairOrdersByEmail',
        data: body
      })
      .then(function successCallback(response){
        return response;
      }, function errorCallback(response){
        return response;
      });
    };


    this.blacklistRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'PUT',
        url: 'http://localhost:8080/repairOrder/blacklist',
        data: body
      })
      .then(function successCallback(response){
        console.log(response);
        return response;
      }, function errorCallback(response){
        console.log(response);
        return response;
      });

    };

    this.unblacklistRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'PUT',
        url: 'http://localhost:8080/repairOrder/unblacklist',
        data: body
      })
      .then(function successCallback(response){
        console.log(response);
        return response;
      }, function errorCallback(response){
        console.log(response);
        return response;
      });

    };

    this.deleteRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'DELETE',
        url: 'http://localhost:8080/repairOrder/delete',
        data: body
      })
      .then(function successCallback(response){
        console.log(response);
        return response;
      }, function errorCallback(response){
        console.log(response);
        return response;
      });
    };

///////////////////////////// USERS ////////////////////////////////

    this.addUser = function(username, userPassword, userRole){

      let body = {
        "username": username,
        "userPassword": userPassword,
        "userRole": userRole
      }

      return $http({
        method: 'POST',
        url: 'http://localhost:8080/user/add',
        data: body
      })
      .then(function successCallback(response){
        return response;
      }, function errorCallback(response){
        return response;
      });
    };

    this.getAllUsers = function(){

      return $http({
        method: 'GET',
        url: 'http://localhost:8080/user/getAllUsers'
      })
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        return response;
      });
    };

    this.deleteUser = function(email){

      let body = { "username": email };

      return $http({
        method: 'DELETE',
        url: 'http://localhost:8080/user/delete',
        data: body
      }).then(function successCallback(response){
        console.log(response);
        return response;
      }, function errorCallback(response){
        console.log(response);
        return response;
      });
    };

    this.login = function(field1, field2){

      let body = {
        "username": field1,
        "userPassword": field2
      };

      $http({
        method: 'POST',
        url: 'http://localhost:8080/user/login',
        data: body
      })
      .then(function successCallback(response){
        if(response.data == 'customer'){
          $state.go('customer');
        }
        else if(response.data == 'technician'){
          $state.go('technician');
        }
        else if(response.data == 'admin'){
          $state.go('admin.users');
        }
      }, function errorCallback(response){
        return response;
      });

    };

  }]);
})();
