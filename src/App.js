import React, { createContext, useEffect, useState } from "react";

import Router from "./components/Router/Router.component";
import AppContext from "./components/AppContext/AppContext.component";

import "./App.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function App() {
  const CLIENT_ID = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

  const routerProps = { frontendtype: "tour", zoom: 11, CLIENT_ID };

  let [destination, setDestination] = useState([10.292, 47.546]);
  let [user, setUser] = useState(null);
  let [tripsList, setTripsList] = useState([]);
  let [apiId, setApiId] = useState(null);
  let context = { user, setUser, destination, setDestination, tripsList, setTripsList, apiId, setApiId };
  console.log(context);

  useEffect(() => {
    const handleUserChange = async () => {
      if (user) {
        const { data } = await axios.get("https://606bf444f8678400172e6d03.mockapi.io/users");

        const userData = data.find((apiUser) => apiUser.gid === user.gid);
        if (userData) {
          setTripsList(userData.tripsCart);
          setApiId(userData.id);
        } else {
          const { data } = await axios.post("https://606bf444f8678400172e6d03.mockapi.io/users", { ...user, tripsCart: tripsList });
          setApiId(data.apiId);
        }
      } else {
        setApiId(null);
        setTripsList([]);
      }
    };
    handleUserChange();
  }, [user]);

  useEffect(() => {
    const handleTripsListChange = async () => {
      if (apiId) {
        const { data } = await axios.put(`https://606bf444f8678400172e6d03.mockapi.io/users/${apiId}`, { tripsCart: tripsList });
      }
    };
    handleTripsListChange();
  }, [tripsList]);

  return (
    <AppContext.Provider value={context}>
      <div className="image-bg"></div>

      <Router routerProps={routerProps} />
    </AppContext.Provider>
  );
}

export default App;
