(function(){
  'use strict';

  angular.module('login', [])
  .controller('loginController', [ '$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.field1 = "";
    $scope.field2 = "";

    $scope.login = function(){

      let body = {
        "username": $scope.field1,
        "userPassword": $scope.field2
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
        console.log('failure');
      });

    };

  }]);
})();
