(function() {
  'use strict'

  angular.module('app')
    .component('onePost', {
      templateUrl: '/templates/onePost.template.html',
      controller: controller
    })

  controller.$inject = ['$stateParams', 'PostsServices']

  function controller($stateParams, PostsServices) {
    const vm = this
    vm.$onInit = onInit
    console.log('in OnePostController');
    // vm.editPost = editPost
    // vm.deleter = deleter

    function onInit(id) {
      PostsServices.$onePost($stateParams.id).then((editable) => { // Grabs Post by ID
        vm.post = editable
        console.log('editable: ', editable)
      })
    }

    // function editPost(post) {
    //   // PostsService.edit(vm.post) // Patches Post by ID
    // }

    // function deleter(id) {
    //   // PostsService.$del(id) // Deletes Post by ID
    // }

  } // END controller
}());
