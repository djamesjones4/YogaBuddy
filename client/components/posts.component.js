(function() {
  'use strict'

  angular.module('app')
    .component('posts', {
      templateUrl: '/templates/posts.template.html',
      controller: PostsController,
    })

  PostsController.$inject = ['PostsServices']

  function PostsController(PostsServices) {
    const vm = this
    vm.$onInit = onInit
    vm.likes = likes
    // vm.sort = sort
    // vm.sortPosts = sortPosts

    function onInit() {
      PostsServices.allPosts() // Grabs all Posts
        .then((all) => {
          vm.posts = all
        })
    }

    function likes(post, dir) {
      PostsServices.$like(post, dir) // Like functionality
    }

  // THIS IS BROKEN ATM

    // function sortPosts() {
    //   PostsServices.sorted()
    //       .then((all) => {
    //         return all
    //       })
    // }
    //
    // function sort() { // WORKS BUT YOU HAVE TO CLICK IT
    //   PostsServices.sorted()
    //   .then((all) => {
    //     vm.posts = all
    //   })
    // }

  } // END CONTROLLER
})()
