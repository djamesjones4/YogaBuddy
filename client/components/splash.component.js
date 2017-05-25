(function() {
  'use strict'

  angular.module('app')
    .component('splash', {
      templateUrl: '/templates/splash.template.html', // NAV BAR TEMPLATE
      controller: SplashController
    })
//ALLOWS US TO CHANGE STATES BY BUTTON CLICK
SplashController.$inject = ['$state']
  function SplashController($state) {
    const vm = this
    vm.$onInit = onInit
vm.home = home
    function onInit() {
      // vm.navShow = false
    }
function home(){
//ALLOWS US TO CHANGE STATES BY BUTTON CLICK
$state.go('home.users')
}
  } // END SplashController
}());
