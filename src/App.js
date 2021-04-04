import React, { useEffect, useState } from "react";

import Router from "./components/Router/Router.component";

import "./App.css";

function App() {
  let [destination, setDestination] = useState([10.292, 47.546]);
  let [userId, setUserId] = useState(null);
  // TODO: Change props to be dynamic, the center should be the chosen destination.
  // return ;
  return (
    <div>
      {/* <TripsSearch frontendtype="tour" zoom={11} center={destination} /> */}
      {/* <SignIn setUserId={setUserId} /> */}
      <Router />
    </div>
  );
}

export default App;
