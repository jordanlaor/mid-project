import React, { createContext, useEffect, useState } from "react";

import Router from "./components/Router/Router.component";
import AppContext from "./components/AppContext/AppContext.component";

import "./App.css";
import axios from "axios";

function App() {
  const CLIENT_ID = "984229081126-j76b48rlbtn8bdrvu0pq5o5au5l469kd.apps.googleusercontent.com";

  const routerProps = { frontendtype: "tour", zoom: 11, CLIENT_ID };

  let [destination, setDestination] = useState([10.292, 47.546]);
  let [tripId, setTripId] = useState(null);
  let [user, setUser] = useState(null);
  let [tripsList, setTripsList] = useState([]);
  let [tripsRatingList, setTripsRatingList] = useState([]);
  let [userTripsRatingList, setUserTripsRatingList] = useState([]);
  let [apiId, setApiId] = useState(null);
  let context = {
    user,
    setUser,
    destination,
    setDestination,
    tripId,
    setTripId,
    tripsList,
    setTripsList,
    tripsRatingList,
    setTripsRatingList,
    userTripsRatingList,
    setUserTripsRatingList,
    apiId,
    setApiId,
  };
  console.log(context);

  useEffect(() => {
    const handleUserChange = async () => {
      if (user) {
        const { data } = await axios.get("https://606bf444f8678400172e6d03.mockapi.io/users");

        const userData = data.find((apiUser) => apiUser.gid === user.gid);
        if (userData) {
          setTripsList(userData.tripsCart);
          setUserTripsRatingList(userData.tripsRating);
          setApiId(userData.id);
        } else {
          const { data } = await axios.post("https://606bf444f8678400172e6d03.mockapi.io/users", {
            ...user,
            tripsCart: tripsList,
            tripsRating: userTripsRatingList,
          });
          setApiId(data.apiId);
        }
      } else {
        setApiId(null);
        setTripsList([]);
        setUserTripsRatingList([]);
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

  useEffect(() => {
    const getTripsRating = async () => {
      const { data } = await axios.get("https://606bf444f8678400172e6d03.mockapi.io/trips");
      setTripsRatingList(data);
    };
    getTripsRating();
  }, []);

  window.addEventListener("resize", () => {
    const mapContainer = document.querySelector(".oax-part-flexviewpage");
    if (mapContainer) {
      const nav = document.querySelector(".nav");
      console.log(window.getComputedStyle(nav));
      mapContainer.style.height = `${
        window.innerHeight -
        (parseInt(window.getComputedStyle(nav).height) +
          parseInt(window.getComputedStyle(nav).marginBottom) +
          parseInt(window.getComputedStyle(nav).marginTop) +
          100)
      }px`;
    }
  });

  useEffect(() => {
    const updateRating = async () => {
      if (apiId) {
        const { data } = await axios.put(`https://606bf444f8678400172e6d03.mockapi.io/users/${apiId}`, {
          tripsRating: userTripsRatingList,
        });
      }
    };
    updateRating();
  }, [userTripsRatingList]);

  useEffect(() => {
    if (tripsRatingList.length && apiId) {
      const updateRating = async () => {
        const { data } = await axios.put(`https://606bf444f8678400172e6d03.mockapi.io/users/${apiId}`, {
          tripsRating: userTripsRatingList,
        });
      };
      updateRating();
    }
  }, [tripsRatingList]);

  return (
    <AppContext.Provider value={context}>
      <div className="image-bg"></div>

      <Router routerProps={routerProps} />
    </AppContext.Provider>
  );
}

export default App;
