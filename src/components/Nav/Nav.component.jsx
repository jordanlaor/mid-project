import React from "react";
import { useRouteMatch } from "react-router";

import SignOut from "../SignOut/SignOut.component";

import "./nav.css";

const Nav = () => {
  return (
    <>
      {useRouteMatch("/:anything") && (
        <ul>
          <li className="navLink">
            <Link to="/choosedestination">Choose a Destination</Link>
          </li>
          <li className="navLink">
            <Link to="/tripssearch">Search for Trips</Link>
          </li>
          <li className="navLink">
            <Link to="/tripsCart">Go to the Trips Cart</Link>
          </li>
          <li className="navLink">
            <SignOut />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
