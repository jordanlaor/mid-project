import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../components/AppContext/AppContext.component";

const ChooseDestination = () => {
  const appContext = useContext(AppContext);
  console.log(appContext);
  return (
    <div>
      <h2>hello {appContext.user.name}!</h2>
      <Link to="/tripssearch">Search for trips</Link>
    </div>
  );
};

export default ChooseDestination;
