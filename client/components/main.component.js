(function() {
  'use strict'

  angular.module('app')
    .component('main', {
      templateUrl: '/templates/main.template.html', //PARENT TEMPLETE
      controller: MainController
    })
  //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
  MainController.$inject = ['MainService', '$stateParams', '$state']

  function MainController(MainService, $stateParams, $state) {
    const vm = this
    vm.$onInit = onInit
    vm.feed = feed
    vm.gohome = gohome
    vm.splash = splash
    vm.addPost = addPost

    function onInit() {
      // vm.navShow = false
    }

    function feed() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('posts')
    }

    function gohome() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('home')
    }

    function splash() {
      //ALLOWS US TO CHANGE STATES BY BUTTON CLICK
      // REFER TO app.config.js TO CHECK STATES & CORRESPONDING COMPONENTS
      // $state.go('splash')
    }

    // function addPost(post) {
      // MainService.newPost(post)
      // $state.reload();
    // }

    vm.navBarProfile = navBarProfile
    vm.navBarPoses = navBarPoses
    vm.navBarNewPost = navBarNewPost
    vm.navBarSignOut = navBarSignOut
    vm.navBarChakra1 = navBarChakra1
    vm.navBarChakra2 = navBarChakra2
    vm.navBarChakra3 = navBarChakra3
    vm.navBarChakra4 = navBarChakra4
    vm.navBarChakra5 = navBarChakra5
    vm.navBarChakra6 = navBarChakra6
    vm.navBarChakra7 = navBarChakra7

    function navBarProfile() {
      console.log("You clicked Profile");
    }

    function navBarPoses() {
      console.log("You clicked poses");
    }

    function navBarNewPost() {
      console.log("You clicked NewPost");
    }

    function navBarSignOut() {
      console.log("You clicked Signout");
    }

    function navBarChakra1() {
      console.log("You clicked Chakra 1");
    }

    function navBarChakra2() {
      console.log("You clicked Chakra 2");
    }

    function navBarChakra3() {
      console.log("You clicked Chakra 3");
    }

    function navBarChakra4() {
      console.log("You clicked Chakra 4");
    }

    function navBarChakra5() {
      console.log("You clicked Chakra 5");
    }

    function navBarChakra6() {
      console.log("You clicked Chakra 6");
    }

    function navBarChakra7() {
      console.log("You clicked Chakra 7");
    }

    /* Set the width of the side navigation to 250px */
    // function openLeftNav() {
    //   document.getElementById("leftnav").style.width = "250px";
    //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // }

    /* Set the width of the side navigation to 0 */
    // function closeLeftNav() {
    //   document.getElementById("leftnav").style.width = "0";
    // }

    /* Set the width of the side navigation to 250px */
    // function openRightNav() {
    //   document.getElementById("rightnav").style.width = "250px";
    //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // }

    // /* Set the width of the side navigation to 0 */
    // function closeRightNav() {
    //   document.getElementById("rightnav").style.width = "0";
    // }

  } // END HomeController
}());
