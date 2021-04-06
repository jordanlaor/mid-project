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

      initDataPointList: appContext.tripsList,
      fitDataBounds: true,
      actionOpenType: "none",
      onOoiClick: (object, event) => {
        console.log(object.id);
        history.push(`/trip/${object.id}`);
      },
      withUrlHash: true,
    };
    const fvp = window.oa.api.flexviewpage(conf);
  }, []);

  return <div className="oax-top-cont"></div>;
};

export default TripsCart;
