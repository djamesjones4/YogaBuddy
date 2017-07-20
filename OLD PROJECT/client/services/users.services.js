(function() {
  'use strict'

  angular.module('app')
    .service('UsersServices', service)
  service.$inject = ['$http']

  function service($http) {

    this.allUsers = function() { // Grabs all users
      return $http.get('/api/users').then(all => all.data)
    }

    this.$User = function(id) { // Grab a user by ID
      return $http.get(`/api/users/${id}`).then(one => one.data)
    }

    this.createUser = function(createUser) { // Makes new user
      $http.user('/api/users', createUser)
      $state.reload();
    }

    this.$del = function(id) { // Removes User by ID
      $http.delete(`/api/users/${id}`).then(d => $state.go('app.all'))
    }

    this.$like = function(user, dir) { // Handles both likes and dislikes
      user.negative = false // Makes my error span pop out atcha
      dir == true ?
        $http.user(`/api/users/${user.id}/votes`)
        .then(likes => user.vote_count = likes.data.vote_count) :
        (dir == false && user.vote_count > 0) ?
        $http.delete(`/api/users/${user.id}/votes`)
        .then(dislikes => user.vote_count = dislikes.data.vote_count) :
        user.negative = !user.negative // makes my error pop out if they try and go past 0
    }

    this.edit = function(user) { // Patches current User by ID
      $http.patch(`/api/users/${id}/`, user)
      $state.go('app.all')
    }

  }
})();
