(function() {
  'use strict'

  angular.module('app')
    .component('poses', {
      templateUrl: '/templates/poses.template.html',
      controller: PosesController
    })

  PosesController.$inject = ['PosesService', '$http', '$stateParams', '$state']

  function PosesController(PosesService, $http, $stateParams, $state) {
    console.log("you are in the Poses Controller")
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      PosesService.allPoses()
      .then((allposes) => {
        console.log("all poses shuld be here: ", allposes)
        vm.poses = allposes
      })
    }
  }
})()
