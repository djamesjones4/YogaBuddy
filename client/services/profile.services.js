(function() {
  'use strict'

  angular.module('app')
    .service('ProfileService', service)

  service.$inject = ['$http']

  function service($http, $stateParams, $state, $filter) {
    this.allItems = function(id) {
      // ternary = condition ? explr1 : explr2
      return $http.get(id ? `/api/users/${id}` : "/api/users").then(all => {
        console.log("All user data: ", all.data)

        return all.data
      }, err => {
          // handle error
      })
    }

    this.allPosts = function() {
      return $http.get('/api/posts').then(all => {
        console.log("all post data: ", all.data)

        return all.data
      }, err => {
          // TODO: handle error
      })
    }
  }
})()
