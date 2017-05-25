(function () {
  'use strict'

  angular.module('app')
    .component('onePose',{
      templateUrl: '/templates/poses.template.html',
      controller: OnePoseController,
    })
    OnePoseController.$inject = ['PosesService', '$http', '$stateParams', '$state']
    function OnePosesController() {
      console.log("you are in the Poses Controller")
    }
})()
