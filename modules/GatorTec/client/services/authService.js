(function(){
  'use strict';

  angular.module('authService', [])
  .constant('USER_ROLES', {
    Admin: 'Admin',
    Technician: 'Technician',
    Customer: 'Customer'
  })
  // .constant('AUTH_EVENTS', {
  //   loginSuccess: 'auth-login-success',
  //   loginFailed: 'auth-login-failed',
  //   logoutSuccess: 'auth-logout-success',
  //   sessionTimeout: 'auth-session-timeout',
  //   notAuthenticated: 'auth-not-authenticated',
  //   notAuthorized: 'auth-not-authorized'
  // })
  .factory('authAPI', ['$http', '$state', 'sessionAPI', function($http, $state, sessionAPI) {
    let authService = {};

      authService.login = function(field1, field2){
            let body = {
              "username": field1,
              "userPassword": field2
            };
            return $http({
              method: 'POST',
              url: 'http://localhost:8080/user/login',
              headers: { "Content-Type":"application/json" },
              data: body
            })
            .then(function successCallback(response){
              let state = '';
              if(response.data.userRole == 'Customer'){ state = 'customer'; }
              else if(response.data.userRole == 'Technician'){ state = 'technician'; }
              else if(response.data.userRole == 'Admin'){ state = 'admin.customers'; }
              sessionAPI.create(response.data.id, response.data.userId, response.data.userRole);
              $state.go(state);
              return response;
            }, function errorCallback(response){
               return response;
            });
      };
      authService.logout = function(){
        // return $http({
          // method: 'GET',
          // url: 'http://localhost:8080/user/logout',
        // })
        // .then(function successCallback(response){
          sessionAPI.destroy();
          $state.go('login');
          // return response;
        // }, function errorCallback(response){
          // return response;
        // });
      };
      authService.isAuthenticated = function(){
        return !!sessionAPI.userId;
      };
      authService.isAuthorized = function(authorizedRoles){
        if(!angular.isArray(authorizedRoles)){
          authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(sessionAPI.userRole) !== -1);
      };

      return authService;
  }])
  .service('sessionAPI', [function() {

    this.create = function(sessionId, userId, userRole){
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function(){
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };

    return this;
  }]);
})();
