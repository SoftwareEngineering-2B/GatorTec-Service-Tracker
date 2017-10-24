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

    });


})();
