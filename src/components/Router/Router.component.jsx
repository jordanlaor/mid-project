import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignInPage from "../../Pages/SignIn.page";
import Home from "../../Pages/Home.page";
import TripsSearch from "../../Pages/TripsSearch.page";
import TripDetails from "../../Pages/TripDetails.page";
import TripsCart from "../../Pages/TripsCart.page";
import Nav from "../Nav/Nav.component";
import AppContext from "../AppContext/AppContext.component";
import SpecialRoute from "../SpecialRoute/SpecialRoute.component";
import error404 from "../../Pages/error404.page";

const Router = ({ routerProps }) => {
  const appContext = useContext(AppContext);
  const { CLIENT_ID } = routerProps;
  return (
    <BrowserRouter>
      <Nav clientId={CLIENT_ID} />
      <Switch>
        <Route exact path="/signin">
          <SpecialRoute condition={appContext.user}>
            <Redirect to="/" />
            <SignInPage clientId={CLIENT_ID} />
          </SpecialRoute>
        </Route>
        {/* <Route exact path="/signin">
          {condition ? <Redirect to="/" /> : <SignInPage clientId={CLIENT_ID} />}
        </Route> */}
        <Route exact path="/">
          <SpecialRoute condition={appContext.user}>
            <Home />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
        <Route exact path="/tripssearch">
          <SpecialRoute condition={appContext.user}>
            <TripsSearch />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
        <Route exact path="/trip/:id">
          <SpecialRoute condition={appContext.user}>
            <TripDetails />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
        <Route exact path="/tripsCart">
          <SpecialRoute condition={appContext.user}>
            <TripsCart />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
        <Route component={error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
