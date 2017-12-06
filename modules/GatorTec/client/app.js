(function(){
  'use strict';

  angular.module('app', ['login', 'customer', 'technician', 'admin', 'httpService', 'authService', 'ui.router', 'papa-promise', 'angular-file-input'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES){

      // $locationProvider.html5Mode({ enabled: true, requireBase: false });
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
          controller:'customerController',
          data: {
            authorizedRoles: [USER_ROLES.Customer]
          }
        })
        .state('technician', {
          url: '/technician',
          templateUrl: './views/technicianView.html',
          controller: 'technicianController',
          data: {
            authorizedRoles: [USER_ROLES.Technician]
          }
        })
        .state('admin', {
          url: '/admin',
          abstract: true,
          template: '<ui-view/>'
        })
        .state('admin.customers', {
          url: '/customers',
          templateUrl: './views/adminView.customers.html',
          controller: 'adminControllerCustomers',
          data: {
            authorizedRoles: [USER_ROLES.Admin]
          }
        })
        .state('admin.users', {
          url: '/users',
          templateUrl: './views/adminView.users.html',
          controller: 'adminControllerUsers',
          data: {
            authorizedRoles: [USER_ROLES.Admin]
          }
        })
        .state('admin.database', {
          url: '/database',
          templateUrl: './views/adminView.database.html',
          controller: 'adminControllerDatabase',
          data: {
            authorizedRoles: [USER_ROLES.Admin]
          }
        });
    })
    .run(function($rootScope, authAPI, $state){
      $rootScope.$on('$stateChangeStart', function(event, next){
        if(next.url !== "/login"){
          let authorizedRoles = next.data.authorizedRoles;
          if(!authAPI.isAuthorized(authorizedRoles)){
            event.preventDefault();
            $state.go('login'); // Logs out on refresh
          }
        }
      });
    });

})();
