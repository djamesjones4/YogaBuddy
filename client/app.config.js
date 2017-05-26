(function() {
  'use strict';
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
    $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
      // .state({ // 1st STATE (on click in this case)
      //   name: 'splash',
      //   url: '/',
      //   component: 'splash'
      // })
      // .state({ // main state/component on every page
      //   name: 'home',
      //   url: '/home',
      //   component: 'home'
      // })
      // .state({ // 1st STATE (on click in this case)
      //   name: 'main',
      //   url: '/om',
      //   component: 'main'
      // })
    .state({ // 1st STATE (on click in this case)
      name: 'posts',
      url: '/posts',
      component: 'posts'
    })
    .state({ // 2nd STATE (on click in this case)
      name: 'singlePostState',
      url: '/post/:id',
      component: 'onePost'
    })
    // .state({ // 3rd STATE (on click in this case)
    //   name: 'post.comment',
    //   url: '/comments',
    //   component: 'comments'
    // })
    // .state({ // 4th STATE (on click in this case)
    //   name: 'users',
    //   url: '/users/:id',
    //   component: 'users'
    // })
    // .state({ // 1st STATE (on click in this case)
    //   name: 'main.poses',
    //   url: '/poses',
    //   component: 'poses'
    // })
    // .state({ // 1st STATE (on click in this case)
    //   name: 'pose',
    //   url: '/poses/:id',
    //   component: 'onePose'
    // })
    // .state({ // 5th STATE (on click in this case)
    //   name: 'comment',
    //   url: '/posts/:id/comments',
    //   component: 'comments'
    // })

  } // END CONFIG FUNCTION
})()
