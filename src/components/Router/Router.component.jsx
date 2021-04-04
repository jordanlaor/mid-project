import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "../../Pages/SignIn.page";
import ChooseDestination from "../../Pages/ChooseDestination.page";
import TripsSearch from "../../Pages/TripsSearch.page";
import TripDetails from "../../Pages/TripDetails.page";
import TripsCart from "../../Pages/TripsCart.page";

const Router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
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
    </Router>
  );
};

export default Router;
