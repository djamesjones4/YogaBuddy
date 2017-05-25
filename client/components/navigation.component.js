(function() {
  'use strict'

  angular.module('app')
    .component('nav', {
      // templateUrl: '/templates/navigation.template.html',
      controller: NavigationController,
    })
  // NavigationController.$inject = ['PostsService']
  function NavigationController() {
    console.log('in the Nav controller');
    // .component('leftnavbar', {
    const vm = this
    vm.navBarProfile = navBarProfile
    vm.navBarPostures = navBarPostures
    vm.navBarSettings = navBarSettings
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
      // $state.go(  ON PAGE);//RENDER PROFILE TEMPLATE

    }

    function navBarPoses() {
      console.log("You clicked poses");
      $state.go()//RENDER POSES TEMPLATE ON PAGE// );
    }

    function navBarNewPost() {
      console.log("You clicked NewPost");
      $state.go()//RENDER NEWPOST TEMPLATE ON PAGE// );
    }

    function navBarSignOut() {
      console.log("You clicked Signout");
      $state.go()//RENDER CONTRIBUTORS TEMPLATE ON PAGE// )
    }

    // .component('rightnavbar', {
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
    function openLeftNav() {
      document.getElementById("leftnav").style.width = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    /* Set the width of the side navigation to 0 */
    function closeLeftNav() {
      document.getElementById("leftnav").style.width = "0";
    }

    /* Set the width of the side navigation to 250px */
    function openRightNav() {
      document.getElementById("rightnav").style.width = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    // /* Set the width of the side navigation to 0 */
    function closeRightNav() {
      document.getElementById("rightnav").style.width = "0";
    }

  } // END CONTROLLER
}());
