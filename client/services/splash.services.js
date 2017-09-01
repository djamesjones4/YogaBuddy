(function() {
  'use strict'

console.log('in service')
  angular.module('app')
    .service('SplashService', service)

  service.$inject = ['$http']

  function service($http, SplashService) {
    console.log('service function')
    this.logIn = function(userInfo) {
      console.log('in service')
      $http.post('/api/users', userInfo)
      .then(user => {
        console.log("user data: ", user)

        return user.data
      }, err => {
        // handle error here
      })
    }
  }
})()
