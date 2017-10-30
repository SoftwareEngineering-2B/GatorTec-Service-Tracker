(function(){
  'use strict';

  angular.module('login', [])
  .controller('loginController', ['$scope', 'httpAPI', function($scope, httpAPI) {
    $scope.field1 = "";
    $scope.field2 = "";

    $scope.login = function(){
      httpAPI.login($scope.field1, $scope.field2);
    };

  }]);
})();
