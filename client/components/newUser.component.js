(function() {
  'use strict'

  angular.module('app')
    .component('newUser', {
      templateUrl: 'templates/newUser.template.html',
      controller: NewUserController
    })

  NewUserController.$inject = ['NewUserService', '$http', '$stateParams', '$state']

  function NewUserController(NewUserService, $http, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.newUserInfo = {}
    function onInit() {
      $state.go('newUser')
    }
    vm.createUser = function() {
      NewUserService.createUser(vm.newUserInfo)
    }
  }
})()
