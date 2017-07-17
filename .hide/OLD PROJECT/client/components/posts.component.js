(function() {
  'use strict'

  angular.module('app')
    .component('posts', {
      templateUrl: '/templates/posts.template.html',
      controller: PostsController,
    })

  PostsController.$inject = ['PostsServices', '$stateParams', '$state']

  function PostsController(PostsServices, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.likes = likes
    function onInit() {
      PostsServices.allPosts() // Grabs all Posts
        .then((all) => {
          vm.posts = all
          // console.log(all);
        })
    }
    function likes(post, dir) {
      PostsServices.$like(post, dir) // Like functionality
    }


  } // END CONTROLLER
})()
