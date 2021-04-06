import React, { createElement, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router";

import AppContext from "../components/AppContext/AppContext.component";
import Btn from "../components/Btn/Btn.component";

// oax-head-btn-cont
const TripDetails = (props) => {
  const tripRef = useRef(null);
  const appContext = useContext(AppContext);
  let fvp;
  const toggleTripInList = (id) => {
    const index = appContext.tripsList.findIndex((trip) => trip === id);
    if (index >= 0) appContext.setTripsList((tripsList) => tripsList.filter((trip) => trip !== id));
    else appContext.setTripsList((tripsList) => [...tripsList, id]);
  };
  const { id } = useParams();
  useEffect(() => {
    const conf = {
      id,
      actionOpenType: "in-page",
    };

    fvp = window.oa.api.detailpage(conf);
  }, []);

  return (
    <div>
      <div className="controls">
        <Btn
          btnTxt={appContext.tripsList.includes(id) ? "Remove from trips cart" : "Add to trips cart"}
          onClick={() => toggleTripInList(id)}
        ></Btn>
      </div>
      <div ref={tripRef} className="oax-top-cont"></div>
    </div>
  );
};

export default TripDetails;
