(function() {
  'use strict'

  angular.module('app')
    .service('CommentsServices', service)
  service.$inject = ['$http']

  function service($http) {

    this.allComments = function(id) { // Grabs all comments per Post ID
      return $http.get(`/posts/${$stateParams.id}/comments`).then((all) => {
        return all.data
      })
    }

    this.addComment = function(comment) { // Adds a comment to Post ID
    $http.post(`/api/posts/${$stateParams.id}/comments`, comment)
    $state.reload();
  }

  }
})();
