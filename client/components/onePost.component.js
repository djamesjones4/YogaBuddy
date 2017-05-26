(function() {
  'use strict'

  angular.module('app')
    .component('onePost', {
      templateUrl: '/template/onePost.template.html',
      controller: OnePostController
    })

  OnePostController.$inject = ['PostsServices']

  function OnePostController(PostsServices) {
    const vm = this
    vm.$onInit = onInit
    vm.editPost = editPost
    vm.deleter = deleter

    function onInit(id) {
      PostsService.$onePost(id).then((editable) => { // Grabs Post by ID
        vm.post = editable
        console.log('editable: ', editable)
      })
    }

    function editPost(post) {
      // PostsService.edit(vm.post) // Patches Post by ID
    }

    function deleter(id) {
      // PostsService.$del(id) // Deletes Post by ID
    }

  } // END OnePostController
}());
