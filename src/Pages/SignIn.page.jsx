import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

const SignIn = (props) => {
  const { setUserId } = props;
  /**
   * The Sign-In client object.
   */
  let auth2;

  /**
   * Handle successful sign-ins.
   */
  const onSuccess = function (user) {
    console.log("Signed in as " + user.getBasicProfile().getId());
    setUserId(user.getBasicProfile().getId());
  };

  /**
   * Handle sign-in failures.
   */
  const onFailure = function (error) {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default SignIn;
