import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../../Pages/Home.page";
import ChooseDestination from "../../Pages/ChooseDestination.page";
import TripsSearch from "../../Pages/TripsSearch.page";
import TripDetails from "../../Pages/TripDetails.page";
import TripsCart from "../../Pages/TripsCart.page";
import Nav from "../Nav/Nav.component";
import AppContext from "../AppCotext/AppContext.component";

const Router = ({ routerProps }) => {
  const appContext = useContext(AppContext);
  const { frontendtype, zoom, CLIENT_ID } = routerProps;
  return (
    <BrowserRouter>
      <Nav clientId={CLIENT_ID} />
      <Switch>
        <Route exact path="/">
          {appContext.user ? <Redirect to="/choosedestination" /> : <Home clientId={CLIENT_ID} />}
        </Route>
        <Route exact path="/choosedestination">
          <ChooseDestination />
        </Route>
        <Route exact path="/tripssearch">
          <TripsSearch />
        </Route>
        <Route exact path="/trip/:id">
          <TripDetails />
        </Route>
        <Route exact path="/tripsCart">
          <TripsCart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
