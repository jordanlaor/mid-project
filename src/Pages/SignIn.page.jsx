import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn/SignIn.component";

const SignInPage = (props) => {
  const { clientId } = props;
  return (
    <div className="home">
      <h2>Hello!</h2>
      <h3>To start planning your trips you need to sign in</h3>
      <SignIn clientId={clientId} />;
    </div>
  );
};

export default SignInPage;
