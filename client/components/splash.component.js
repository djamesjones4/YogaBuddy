(function() {
  'use strict'

  angular.module('app')
    .component('splash', {
      templateUrl: '/templates/splash.template.html',
      controller: SplashController
    })

  SplashController.$inject = ['SplashService', '$http', '$stateParams', '$state']

  function SplashController(splashService, $http, $stateParams, $state) {
    console.log("you are in the splash Controller")
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      // $(".button-collapse").sideNav()
    }
  }
})()
