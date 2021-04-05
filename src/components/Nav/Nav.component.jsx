import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import SignOut from "../SignOut/SignOut.component";

import "./nav.css";

const Nav = (props) => {
  const { clientId } = props;
  return (
    <>
      {useRouteMatch("/:anything") && (
        <ul className="nav">
          <li className="navLinkItem">
            <NavLink className="navLink" to="/choosedestination">
              Choose a Destination
            </NavLink>
          </li>
          <li className="navLinkItem">
            <NavLink className="navLink" to="/tripssearch">
              Search for Trips
            </NavLink>
          </li>
          <li className="navLinkItem">
            <NavLink className="navLink" to="/tripsCart">
              Go to the Trips Cart
            </NavLink>
          </li>
          <li className="navLinkItem">
            <SignOut clientId={clientId} />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
