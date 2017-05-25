(function() {
  'use strict'

  angular.module('app')
    .service('PostsServices', service)
  service.$inject = ['$http']

  function service($http) {

    this.allPosts = function() { // Grabs all posts

      return $http.get('/api/posts')
        .then((all) => {
          return all.data
          // console.log(all.data)
        })
    }

    this.$onePost = function(id) { // Grab a post by ID
      return $http.get(`/api/posts/${id}`).then((one) => one.data)
    }


    this.newPost = function(newPost) { // Makes new post
      $http.post('/api/posts', newPost)
      $state.reload();
    }

    this.$del = function(id) { // Removes Post by ID
      $http.delete(`/api/posts/${id}`).then(d => $state.go('app.all'))
    }

    this.$like = function(post, dir) { // Handles both likes and dislikes
      post.negative = false // Makes my error span pop out atcha
      dir == true ?
        $http.post(`/api/posts/${post.id}/likes`)
        .then(likes => post.likes = likes.data.likes) :
        (dir == false && post.likes > 0) ?
        $http.delete(`/api/posts/${post.id}/likes`)
        .then(dislikes => post.likes = dislikes.data.likes) :
        post.negative = !post.negative // makes my error pop out if they try and go past 0
    }


    this.edit = function(post) { // Patches current Post by ID
      $http.patch(`posts/${id}/`, post)
      $state.go('app.all')
    }

  }
})();
