(function() {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: '/templates/home.template.html', // NAV BAR TEMPLATE
      controller: HomeController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  HomeController.$inject = ['$state']

  function HomeController($state) {
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
      $state.go('home.posts')
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
