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

    vm.moveLotus = function() {
      let lotus_top = document.getElementById('animated-login-top')
      let lotus_bottom = document.getElementById('animated-login-bottom')
      // let menuIcon = document.getElementById('menuIcon')
      // menuIcon.style.display = 'none'
      lotus_top.className = 'animated-login-top-move move-lotus-top'
      lotus_bottom.className = 'lotus-login-bottom-pulse move-lotus-bottom'
      // wait 2 seconds and then &state.go('feed')
    }
  }
})()
