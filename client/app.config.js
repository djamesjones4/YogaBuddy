(function() {
  'use strict'

  angular.module('app').config(config)
  // DEPENDENCY INJECTION INTO CONFIG
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    // Setting clean URLs (no hashtags)
    $locationProvider.html5Mode(true)
    // DEFINING ADDITIONAL STATES FOR Single-Page-Application
    $stateProvider
    // 1st STATE (on click in this case)
      .state({
        name: 'splash',
        url: '/',
        component: 'splash'
      })
      .state({
        name: 'feed',
        url: '/feed',
        component: 'feed'
      })
      .state({
        name: 'profile',
        url: '/profile',
        component: 'profile'
      })
  }
  // END CONFIG FUNCTION
})()
