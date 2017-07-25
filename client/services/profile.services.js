(function() {
  'use strict'

  angular.module('app')
    .service('ProfileService', service)

  service.$inject = ['$http']

  function service($http, $stateParams, $state, $filter) {
    this.allItems = function() { // Grabs all items
      return $http.get('/api/users').then(all => {
          console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }

    this.allPosts = function() { // Grabs all items
      return $http.get('/api/posts').then(all => {
          console.log("HAYYYY", all.data)
          return all.data
        }, err => {
          // console.log("NOOOO");
        })
    }
  }
})()
