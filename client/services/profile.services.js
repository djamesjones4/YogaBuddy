(function() {
  'use strict'

  angular.module('app')
    .service('ProfileService', service)

  service.$inject = ['$http']

  function service($http, $stateParams, $state, $filter) {
    this.allItems = function(id) { // Grabs all items or items by id passed from token

      return $http.get(id ? `/api/users/${id}` : "/api/users").then(all => {
          console.log("All user data: ", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }

    this.allPosts = function() { // Grabs all items
      return $http.get('/api/posts').then(all => {
          console.log("all post data: ", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }
  }
})()
