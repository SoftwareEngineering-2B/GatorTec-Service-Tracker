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

  $scope.scrollToTop = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  /*
  $scope.addListing = function() {
    $scope.listings.push($scope.newListing);
    $scope.newListing = {};
  };

  $scope.deleteListing = function(index) {
    $scope.listings.splice($scope.listings.indexOf(index),1);
  };

  $scope.showDetails = function(index) {
    $scope.detailedInfo = {'name':index.name, 'address':index.address, 'code':index.code}
  };*/
}
]);