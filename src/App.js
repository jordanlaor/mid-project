import React, { createContext, useEffect, useState } from "react";

import Router from "./components/Router/Router.component";
import AppContext from "./components/AppContext/AppContext.component";

import "./App.css";

function App() {
  const CLIENT_ID = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

  const routerProps = { frontendtype: "tour", zoom: 11, CLIENT_ID };

  let [destination, setDestination] = useState([10.292, 47.546]);
  let [user, setUser] = useState(null);
  let [tripsList, setTripsList] = useState(["11469653", "33150498"]);
  let context = { user, setUser, destination, setDestination, tripsList, setTripsList };
  console.log(context);

  return (
    <AppContext.Provider value={context}>
      <Router routerProps={routerProps} />
    </AppContext.Provider>
  );
}

export default App;
