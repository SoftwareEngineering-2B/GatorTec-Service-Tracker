(function(){
  'use strict';

  angular.module('login', [])
  .controller('loginController', ['$rootScope', '$scope', 'authAPI', function($rootScope, $scope, authAPI) {
    $scope.field1 = "";
    $scope.field2 = "";

      $scope.login = function(){
        authAPI.login($scope.field1, $scope.field2);
      };

  }]);
})();
