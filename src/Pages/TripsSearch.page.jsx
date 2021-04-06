import React, { createElement, useContext, useEffect, useRef } from "react";

import { useHistory } from "react-router";

const TripsSearch = (props) => {
  const { frontendtype, zoom, center } = props;
  const tripsContainerRef = useRef(null);

  const history = useHistory();
  let fvp;

  useEffect(() => {
    const conf = {
      frontendtype, // choose content type
      zoom, // set initial zoom level
      center, // set initial map center
      // actionOpenType: "page-load",
      // actionOpenType: "in-page",
      actionOpenType: "none",
      onOoiClick: (object, event) => {
        console.log(object.id);
        history.push(`/trip/${object.id}`);
      },
      withUrlHash: true,
      // whereHide: true,

      // openOOIUrl: function (data) {
      //   return `trip/${data.id}`;
      // },
    };

    fvp = window.oa.api.flexviewpage(conf);
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
