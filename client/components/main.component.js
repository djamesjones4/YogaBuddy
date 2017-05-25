(function() {
  'use strict'

  angular.module('app')
    .component('main', {
      templateUrl: '/templates/main.template.html', // NAV BAR TEMPLATE
      controller: MainController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  MainController.$inject = ['MainService', '$stateParams', '$state']

  function MainController(MainService, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.feed = feed
    vm.gohome = gohome
    vm.splash = splash

    function onInit() {
      // vm.navShow = false
    }

    function feed() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      $state.go('main.posts')
    }

    function gohome() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      $state.go('home')
    }

    function splash() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      $state.go('splash')
    }
  } // END HomeController
}());
