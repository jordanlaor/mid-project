import React, { createElement, useContext, useEffect, useRef } from "react";

import Btn from "../components/Btn/Btn.component";
import AppContext from "../components/AppContext/AppContext.component";
import { useLocation } from "react-router";

const TripsSearch = (props) => {
  const { frontendtype, zoom, center } = props;
  const tripsContainerRef = useRef(null);
  const appContext = useContext(AppContext);
  const location = useLocation();
  let fvp;

  const toggleTripInList = (id) => {
    const index = appContext.tripsList.findIndex((trip) => trip === id);
    if (index >= 0) appContext.setTripsList((tripsList) => tripsList.filter((trip) => trip !== id));
    else appContext.setTripsList((tripsList) => [...tripsList, id]);
  };

  useEffect(() => {
    const conf = {
      frontendtype, // choose content type
      zoom, // set initial zoom level
      center, // set initial map center
      actionOpenType: "page-load",
      withUrlHash: true,
      // whereHide: true,

      openOOIUrl: function (data) {
        return `trip/${data.id}`;
      },
    };

    fvp = window.oa.api.flexviewpage(conf);
    console.log(fvp);
    // fvp.whenLoadedWithCategory(() => {
    //   console.log(tripsContainerRef.current);
    //   const tripsList = tripsContainerRef.current.querySelectorAll(".oax-id");
    //   tripsList.forEach((trip) => {
    //     const btnTxt = appContext.tripsList.includes(trip) ? "Remove from trips cart" : "Add to trips cart";
    //     createElement(Btn, { onClick: () => toggleTripInList(trip) }, btnTxt);
    //   });
    // });
  }, []);
  // useEffect(() => {
  //   const tripsList = tripsContainerRef.current.querySelectorAll(".oax-id");
  //   tripsList.forEach((trip) => {
  //     const btnTxt = appContext.tripsList.includes(trip) ? "Remove from trips cart" : "Add to trips cart";
  //     createElement(Btn, { onClick: () => toggleTripInList(trip) }, btnTxt);
  //   });
  // }, [[].slice.call("visibleIdsUpdate", 1)]);

  return <div ref={tripsContainerRef} className="oax-top-cont tripsSearch"></div>;
};

export default TripsSearch;
