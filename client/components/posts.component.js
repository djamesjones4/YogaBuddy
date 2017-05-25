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
    // vm.sort = sort
    // vm.sortPosts = sortPosts

    function onInit() {
      PostsServices.allPosts() // Grabs all Posts
        .then((all) => {
          vm.posts = all.data
          console.log(vm.posts);
        })
    }

    function likes(post, dir) {
      PostsServices.$like(post, dir) // Like functionality
    }


  } // END CONTROLLER
})()
