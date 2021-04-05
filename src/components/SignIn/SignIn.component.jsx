import React, { useContext, useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";

import AppContext from "../AppCotext/AppContext.component";

import "./signIn.css";

const SignIn = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);

  /**
   * Handle successful sign-ins.
   */
  const onSuccess = function (user) {
    console.log("Signed in as " + user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getId());
    const basicProfile = user.getBasicProfile();
    appContext.setUser({ id: basicProfile.getId(), name: basicProfile.getName(), email: basicProfile.getEmail() });
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
