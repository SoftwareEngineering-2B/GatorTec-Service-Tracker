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

    this.getAllRepairOrdersByEmail = function(){

      return $http({
        method: 'GET',
        url: 'http://localhost:8080/repairOrder/getAllRepairOrdersByEmail',
      })
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        return response;
      });
    };


    this.blacklistRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'PUT',
        url: 'http://localhost:8080/repairOrder/blacklist',
        headers: { "Content-Type":"application/json" },
        data: body
      })
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        return response;
      });

    };

    this.unblacklistRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'PUT',
        url: 'http://localhost:8080/repairOrder/unblacklist',
        headers: { "Content-Type":"application/json" },
        data: body
      })
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        return response;
      });

    };

    this.deleteRepairOrder = function(sroID){

      let body = { "sroID": sroID };

      return $http({
        method: 'DELETE',
        url: 'http://localhost:8080/repairOrder/delete',
        headers: { "Content-Type":"application/json" },
        data: body
      })
      .then(function successCallback(response){
        return response;
      }, function errorCallback(response){
        return response;
      });
    };

///////////////////////////// USERS ////////////////////////////////

    this.addUser = function(name, username, userPassword, userRole){

      let body = {
        "name": name,
        "username": username,
        "userPassword": userPassword,
        "userRole": userRole
      }

      return $http({
        method: 'POST',
        url: 'http://localhost:8080/user/add',
        headers: { "Content-Type":"application/json" },
        data: body
      })
      .then(function successCallback(response){
        return response.data;
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
        headers: { "Content-Type":"application/json" },
        data: body
      }).then(function successCallback(response){
        return response;
      }, function errorCallback(response){
        return response;
      });
    };

  }]);
})();
