import React, { useContext, useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect, useHistory } from "react-router";

import AppContext from "../AppContext/AppContext.component";

import "./signOut.css";

const SignOut = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);
  const history = useHistory();

  const onSuccess = function () {
    console.log("Signed out successfully");
    console.log(appContext);
    appContext.setUser(null);
  };

  return (
    <>
      <GoogleLogout
        render={(renderProps) => (
          <button className="navLink" onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Sign Out
          </button>
        )}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        isSignedIn={true}
      />
    </>
  );
};

export default SignOut;
