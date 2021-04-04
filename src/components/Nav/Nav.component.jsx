import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import SignOut from "../SignOut/SignOut.component";

import "./nav.css";

const Nav = () => {
  return (
    <>
      {useRouteMatch("/:anything") && (
        <ul className="nav">
          <li className="navLinkItem">
            <Link className="navLink" to="/choosedestination">
              Choose a Destination
            </Link>
          </li>
          <li className="navLinkItem">
            <Link className="navLink" to="/tripssearch">
              Search for Trips
            </Link>
          </li>
          <li className="navLinkItem">
            <Link className="navLink" to="/tripsCart">
              Go to the Trips Cart
            </Link>
          </li>
          <li className="navLinkItem">
            <SignOut />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
