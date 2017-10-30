(function(){
  'use strict';

  angular.module('app', ['login', 'customer', 'technician', 'admin', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/login');


      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: './views/loginView.html',
          controller:'loginController'
        })
        .state('customer', {
          url: '/customer',
          templateUrl: './views/customerView.html',
          controller:'customerController'
        })
        .state('technician', {
          url: '/technician',
          templateUrl: './views/technicianView.html',
          controller: 'technicianController'
        })
        .state('admin', {
          url: '/admin',
          abstract: true,
          template: '<ui-view/>'
        })
        .state('admin.customers', {
          url: '/customers',
          templateUrl: './views/adminView.customers.html',
          controller: 'adminController'
        })
        .state('admin.users', {
          url: '/users',
          templateUrl: './views/adminView.users.html',
          controller: 'adminController'
        })
        .state('admin.database', {
          url: '/database',
          templateUrl: './views/adminView.database.html',
          controller: 'adminController'
        });



    });


})();
