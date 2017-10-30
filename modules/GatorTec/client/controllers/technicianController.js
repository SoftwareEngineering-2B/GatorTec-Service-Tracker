(function(){
  'use strict';

  angular.module('technician', [])
  .controller('technicianController', [ '$scope', '$http',
  function($scope, $http) {
    $scope.customers = [];
    $http.get('/technician').then(function(d)
        {
            $scope.customers = d.data;
            console.log(d.data);
        },function(err)
        {
            console.log(err);
        }
    )

  }]);
})();
