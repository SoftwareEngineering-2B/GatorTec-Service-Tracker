(function(){
  'use strict';

  angular.module('admin', [])
  .controller('adminController', [ '$scope', '$http', function($scope, $http) {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

  }]);
})();
