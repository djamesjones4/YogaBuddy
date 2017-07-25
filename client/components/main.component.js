(function() {
  'use strict'

  angular.module('app')
    .component('main', {
      templateUrl: '/templates/main.template.html',
      controller: MainController
    })

  MainController.$inject = ['MainService', '$http', '$stateParams', '$state']

  function MainController(MainService, $http, $stateParams, $state) {
    console.log("you are in the Main Controller")
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      $(".button-collapse").sideNav()
    }
  }
})()
