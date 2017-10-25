angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
function($scope, Listings) {
  /* Get all the listings, then bind it to the scope */
  Listings.getAll().then(function(response) {
    $scope.listings = response.data;
    $scope.currentDevice = response.data[0];
  }, function(error) {
    console.log('Unable to retrieve listings:', error);
  });

  $scope.switchDevice = function(listing) {
    $scope.currentDevice = listing;
  };
}
]);