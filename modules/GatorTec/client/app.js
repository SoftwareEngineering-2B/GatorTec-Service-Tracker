(function(){
  'use strict';

  angular.module('app', ['login', 'customer', 'ui.router'])
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
        });
        // .state('technician', {
        //   url: 'technician',
        //   templateUrl: './views/technicianView.html',
        //   controller: 'technicianController'
        // })
        // .state('admin', {
        //   url: '/admin',
        //   templateUrl: './views/adminView.html',
        //   controller: 'adminController'
        // });

    });


})();
