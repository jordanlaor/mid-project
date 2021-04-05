import React, { useContext, useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "react-router";

import AppContext from "../AppCotext/AppContext.component";

import "./signOut.css";

const clientId = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

const SignOut = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);

  const onSuccess = function () {
    console.log("Signed out successfully");
    appContext.setUserId(null);
    <Redirect to="/"></Redirect>;
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
      />
    </>
  );
};

export default SignOut;
