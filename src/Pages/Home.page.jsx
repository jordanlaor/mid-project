import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../components/AppContext/AppContext.component";
import Btn from "../components/Btn/Btn.component";

const Home = () => {
  const appContext = useContext(AppContext);
  console.log(appContext);
  const topRatedRender = () => {
    // TODO
  };
  return (
    <div className="home">
      <h2>Hello {appContext.user.name}!</h2>
      {topRatedRender()}
      <Link to="/tripssearch">
        <Btn onClick={() => {}} btnTxt={<span>Start searching for trips &#129406;</span>} />
      </Link>
    </div>
  );
};

export default Home;
