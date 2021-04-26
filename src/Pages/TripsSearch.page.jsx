import React, { createElement, useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import AppContext from "../components/AppContext/AppContext.component";

const TripsSearch = (props) => {
  const tripsContainerRef = useRef(null);
  const appContext = useContext(AppContext);
  const history = useHistory();
  let fvp;

  useEffect(() => {
    const conf = {
      center: appContext.destination, // set initial map center
      actionOpenType: "none",
      onOoiClick: (object, event) => {
        console.log(object);
        const destination = [...object.point];
        destination.pop();
        appContext.setDestination(destination);
        appContext.setTripId(object.id);
        appContext.setTripName(object.primaryRegion ? object.primaryRegion.title : object.title);
        history.push(`/trip/${object.id}`);
      },
      withUrlHash: true,
    };

    fvp = window.oa.api.flexviewpage(conf);
    fvp.whenMap(() => {
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
  }, []);

  return <div ref={tripsContainerRef} className="oax-top-cont tripsSearch"></div>;
};

export default TripsSearch;
