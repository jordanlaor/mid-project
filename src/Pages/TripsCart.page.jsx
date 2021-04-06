import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import AppContext from "../components/AppContext/AppContext.component";

const TripsCart = (props) => {
  const appContext = useContext(AppContext);
  const { zoom, frontendtype } = props;
  const history = useHistory();
  console.log(appContext.tripsList);
  useEffect(() => {
    const conf = {
      frontendtype: "any",

      initDataPointList: appContext.tripsList.map((trip) => trip.tripId),
      fitDataBounds: true,
      actionOpenType: "none",
      onOoiClick: (object, event) => {
        const destination = [...object.point];
        destination.pop();
        appContext.setDestination(destination);
        appContext.setTripId(object.id);
        history.push(`/trip/${object.id}`);
      },
      withUrlHash: true,
    };
    const fvp = window.oa.api.flexviewpage(conf);
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

  return <div className="oax-top-cont"></div>;
};

export default TripsCart;
