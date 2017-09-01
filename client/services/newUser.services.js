(function() {
  'use strict'

  angular.module('app')
    .service('NewUserService', service)

  service.$inject = ['$http', '$stateParams', '$state', '$filter']

  function service($http, $stateParams, $state, $filter) {
    this.createUser = function(newUserInfo) {
      return $http.post('/api/signup', newUserInfo)
        .then(user => {
          console.log("service user data: ", user)
          console.log('Status Code: ', user.status)
          if (user.status === 200) {
            console.log('status 200')
            $state.go('splash')
          }

          return user.data
        }, err => {
          // handle error
        })
    }
  }
})()
