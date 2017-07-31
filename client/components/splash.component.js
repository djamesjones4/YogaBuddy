(function() {
  'use strict'

  angular.module('app')
    .component('splash', {
      templateUrl: '/templates/splash.template.html',
      controller: SplashController
    })

  SplashController.$inject = ['SplashService', '$http', '$stateParams', '$state']

  function SplashController(SplashService, $http, $stateParams, $state) {
    console.log("you are in the splash Controller")
    const vm = this
    vm.$onInit = onInit
    vm.userAuth = {}
    function onInit() {
      // $(".button-collapse").sideNav()
    }
    vm.logIn = function() {
      console.log('userAuth: ', vm.userAuth)
      SplashService.logIn(vm.userAuth)

    }
  }
})()
