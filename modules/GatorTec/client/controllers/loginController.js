(function(){
  'use strict';

  angular.module('login', [])
  .controller('loginController', [ '$scope', '$http', function($scope, $http) {
    $scope.email = "";
    $scope.phone = "";

    $scope.login = function(){

      let body = {
        "username": $scope.email,
        "userPassword": $scope.phone
      };

      $http({
        method: 'POST',
        url: 'http://localhost:8080/user/login',
        data: body
      })
      .then(function successCallback(response){
        console.log('success');
          console.log(response);
      }, function errorCallback(response){
        console.log('failure');
          console.log(response);
      });

    };

  }]);
})();
