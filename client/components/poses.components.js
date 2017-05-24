(function () {
  'use strict'

  angular.module('app')
    .component('poses',{
      templateUrl: 'poses.template.html',
      controller: PosesController,
    })
    function PosesController() {
      console.log("you are in the Poses Controller");
    }
}());
