(function() {
  'use strict'

  angular.module('app')
    .service('NewUserService', service)

  service.$inject = ['$http', '$stateParams', '$state', '$filter']

  function service($http, $stateParams, $state, $filter) {
    this.createUser = function(newUserInfo) {
      return $http({
        method: 'POST',
        url: '/api/signup',
        data: newUserInfo
      })
      .success(function(data, status, headers, config) {
        console.log(status)
        console.log("service user data: ", data)
        console.log('Status Code: ', status)

        return data
      })
      .error(function(data, status, headers, config) {
        console.log(data)
        console.log('oh no an error in the $http.post')
        console.log('response status code: ', status)

        return data
      })

    //   .then(function successCallback(response) {
    // // this callback will be called asynchronously
    // // when the response is available
    //     console.log("service user data: ", response.data)
    //     console.log('Status Code: ', response.status)
    //
    //     return response.data
    //   }, function errorCallback(response) {
    // // called asynchronously if an error occurs
    // // or server returns response with an error status.
    //     console.log('oh no an error in the $http.post')
    //     console.log('response status code: ', response.status)
    //     console.log('entire response error: ', response)
    //
    //     return response.data
    //   })

      // return $http.post('/api/signup', newUserInfo)
      //   .then(user => {
      //     console.log("service user data: ", user.data)
      //     console.log('Status Code: ', user.status)
      //
      //     return user.data
      //   }, err => {
      //     // TODO: handle error
      //     console.log('oh no an error in the $http.post')
      //     console.log('status code: ', err.status)
      //     console.log('entire error: ', err)
      //   })
    }
  }
})()
