import React, { useContext, useEffect } from "react";
import AppContext from "../components/AppContext/AppContext.component";

const TripsCart = (props) => {
  const appContext = useContext(AppContext);
  const { zoom, frontendtype } = props;
  console.log(appContext.tripsList);
  useEffect(() => {
    const conf = {
      frontendtype: "any",

      initDataPointList: appContext.tripsList,
      fitDataBounds: true,
    };
    const fvp = window.oa.api.flexviewpage(conf);
  }, []);

  return <div className="oax-top-cont"></div>;
};

export default TripsCart;
