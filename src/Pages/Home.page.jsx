import React, { useEffect, useState } from "react";
import SignIn from "../components/SignIn/SignIn.component";

const Home = (props) => {
  const { clientId } = props;
  return <SignIn clientId={clientId} />;
};

export default Home;
