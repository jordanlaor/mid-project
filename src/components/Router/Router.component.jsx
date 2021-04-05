import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../../Pages/Home.page";
import ChooseDestination from "../../Pages/ChooseDestination.page";
import TripsSearch from "../../Pages/TripsSearch.page";
import TripDetails from "../../Pages/TripDetails.page";
import TripsCart from "../../Pages/TripsCart.page";
import Nav from "../Nav/Nav.component";
import AppContext from "../AppContext/AppContext.component";
import SpecialRoute from "../SpecialRoute/SpecialRoute.component";

const Router = ({ routerProps }) => {
  const appContext = useContext(AppContext);
  const { frontendtype, zoom, CLIENT_ID } = routerProps;
  return (
    <BrowserRouter>
      <Nav clientId={CLIENT_ID} />
      <Switch>
        <Route exact path="/">
          <SpecialRoute condition={appContext.user}>
            <Redirect to="/choosedestination" />
            <Home clientId={CLIENT_ID} />
          </SpecialRoute>
        </Route>
        <Route exact path="/choosedestination">
          <SpecialRoute condition={appContext.user}>
            <ChooseDestination />
            <Redirect to="/" />
          </SpecialRoute>
        </Route>
        <Route exact path="/tripssearch">
          <SpecialRoute condition={appContext.user}>
            <TripsSearch />
            <Redirect to="/" />
          </SpecialRoute>
        </Route>
        <Route exact path="/trip/:id">
          <SpecialRoute condition={appContext.user}>
            <TripDetails />
            <Redirect to="/" />
          </SpecialRoute>
        </Route>
        <Route exact path="/tripsCart">
          <SpecialRoute condition={appContext.user}>
            <TripsCart />
            <Redirect to="/" />
          </SpecialRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
