import React, { useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

const SignOut = (props) => {
  const { setUserId } = props;

  const onSuccess = function () {
    console.log("Signed out successfully");
    setUserId(null);
  };

  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
};

export default SignOut;
