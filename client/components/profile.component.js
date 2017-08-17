(function() {
  'use strict'

  angular.module('app')
    .component('profile', {
      templateUrl: '/templates/profile.template.html',
      controller: ProfileController
    })

  ProfileController.$inject = ['ProfileService', '$http', '$stateParams', '$state']

  function ProfileController(ProfileService, $http, $stateParams, $state) {
    console.log("you are in the Profile Controller")
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $(".button-collapse").sideNav()

      ProfileService.allItems()
        .then((allitems) => {
          // get by id after tokens are set up
          vm.items = allitems[0]
        })

      ProfileService.allPosts()
        .then((allposts) => {
          // get by id after tokens are set up
          vm.posts = allposts
        })
    }
  }
})()
