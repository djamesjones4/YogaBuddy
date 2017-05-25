(function() {
  'use strict'

  angular.module('app')
    .component('main.poses', {
      templateUrl: '/templates/poses.template.html',
      controller: PosesController
    })

  PosesController.$inject = ['$http', '$stateParams', '$state']

  function PosesController() {
    console.log("you are in the Poses Controller")
  }
})()
