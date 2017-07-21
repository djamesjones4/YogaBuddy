(function() {
  'use strict'

  angular.module('app')
    .component('feed', {
      templateUrl: '/templates/feed.template.html',
      controller: FeedController
    })

  FeedController.$inject = ['FeedService', '$http', '$stateParams', '$state']

  function FeedController(FeedService, $http, $stateParams, $state) {
    console.log("you are in the Feed Controller")
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $(".button-collapse").sideNav()
    }
  }
})()
