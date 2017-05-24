$(document).ready(function() {

    function onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();

        let data = {
            first_name: profile.getGivenName(),
            last_name: profile.getFamilyName(),
            photo: profile.getImageUrl(),
            email: profile.getEmail()
        }

        $.ajax({
            method: "POST",
            url: "/",
            data: data,
            success: function(done) {
                if (done) {
                    document.location = '/users/419';
                }
            },
            error: function(error) {
                console.log(error);
            }
        });

      let accessToken = googleUser.getAuthResponse(true).access_token
      let idToken = googleUser.getAuthResponse(true).id_token
    }



    function signOut() {
        console.log(gapi);
        gapi.load('auth2', function() {
            gapi.auth2.init().then(function() {
                var auth2 = gapi.auth2.getAuthInstance();
                console.log(auth2);
                auth2.signOut().then(function() {
                    auth2.disconnect();
                    document.location = '/'
                });
            })
        });
    };

  $('.logout').click(function(event) {
    signOut();
  })

})
