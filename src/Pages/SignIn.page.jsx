import React, { useEffect, useState } from "react";

const SignIn = (props) => {
  const { setUserId } = props;
  let { gapi } = window;
  /**
   * The Sign-In client object.
   */
  let auth2;

  /**
   * Handle successful sign-ins.
   */
  const onSuccess = function (user) {
    console.log("Signed in as " + user.getBasicProfile().getName());
    setUserId(user.getBasicProfile().getId());
  };

  /**
   * Handle sign-in failures.
   */
  const onFailure = function (error) {
    console.log(error);
  };

  /**
   * Initializes the Sign-In client.
   */
  const initClient = function () {
    debugger;
    if (gapi) {
      gapi.load("auth2", function () {
        /**
         * Retrieve the singleton for the GoogleAuth library and set up the
         * client.
         */
        auth2 = gapi.auth2.init({
          client_id: "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com",
        });

        // Attach the click handler to the sign-in button
        auth2.attachClickHandler("signin-button", {}, onSuccess, onFailure);
      });
    }
  };

  useEffect(initClient(), [gapi]);

  return (
    <div>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
};

export default SignIn;
