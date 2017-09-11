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

    // from john papa style guide
    function activate() {
    /**
     * Step 1
     * Ask the getAvengers function for the
     * avenger data and wait for the promise
     */
    return getAvengers().then(function() {
        /**
         * Step 4
         * Perform an action on resolve of final promise
         */
        logger.info('Activated Avengers View');
    })
}
    vm.createUser = function() {
      /**
      * Step 2
      * Ask the data service for the data and wait
      * for the promise
      */
      return NewUserService.createUser(vm.newUserInfo)
      .then((data) => {
        /**
              * Step 3
              * set the data and resolve the promise
              */
        vm.newUserInfo = data

        return vm.newUserInfo
      })
    }
  }
})()
