(function() {
  'use strict';
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
    $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
      .state({ // main state/component on every page
        name: 'app',
        component: 'app'
      })
      .state({ // 1st STATE (on click in this case)
        name: 'app.splash',
        url: '/',
        component: 'navigation'
      })
      .state({ // 1st STATE (on click in this case)
        name: 'app.posts',
        url: '/posts',
        component: 'posts'
      })
      .state({ // 2nd STATE (on click in this case)
        name: 'app.post',
        url: '/posts/:id',
        component: 'onePost'
      })
      .state({ // 3rd STATE (on click in this case)
        name: 'app.comment',
        url: '/posts/:id/comments',
        component: 'comments'
      })
      .state({ // 4th STATE (on click in this case)
        name: 'app.users',
        url: '/users/:id',
        component: 'users'
      })
      .state({ // 1st STATE (on click in this case)
        name: 'app.poses',
        url: '/poses',
        component: 'poses'
      })
      .state({ // 1st STATE (on click in this case)
        name: 'app.pose',
        url: '/poses/:id',
        component: 'onePose'
      })
      // .state({ // 5th STATE (on click in this case)
      //   name: 'app.comment',
      //   url: '/posts/:id/comments',
      //   component: 'comments'
      // })

  } // END CONFIG FUNCTION
}());
