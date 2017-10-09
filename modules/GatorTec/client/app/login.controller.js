/*var myApp = angular.module('myApp', []);

myApp.controller('loginController', ['$scope', function ($scope) {
  $scope.email = 'example@gmail.com';
  $scope.phone = '1234567890';
  $scope.login = function (email) {
    $scope.email = 'email';
    $scope.phone = phone;
      $window.alert("E-mail: " + $scope.email + "\n" + "Phone number: " + $scope.phone);
  };
}]);*/

var app = angular.module('myApp', []);
app.controller('loginC', function($scope) {
  $scope.email = document.getElementById("email").value;
  $scope.phone = document.getElementById("phone").value;
  $scope.login = function(){
    alert($scope.email);
    alert($scope.phone);
  }


});

/*function login() {
          alert("Email = " + document.getElementById("email").value + "\n" +
          "Phone Number = " + document.getElementById("phone").value);
}*/
