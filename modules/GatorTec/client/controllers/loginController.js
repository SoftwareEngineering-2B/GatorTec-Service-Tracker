var app = angular.module('myApp', []);
app.controller('loginController', function($scope) {
  $scope.email = "";
  $scope.phone = "";
  $scope.login = function(){
    alert($scope.email);
    alert($scope.phone);
  }
});
