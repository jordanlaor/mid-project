import React, { useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";

import "./signOut.css";

const clientId = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

const SignOut = (props) => {
  const { setUserId } = props;

  const onSuccess = function () {
    console.log("Signed out successfully");
    setUserId(null);
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
