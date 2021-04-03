import React, { useEffect } from "react";

const TripDetails = (props) => {
  const { id } = props;
  useEffect(() => {
    const conf = {
      id,
      actionOpenType: "in-page",
    };

    const fvp = window.oa.api.flexviewpage(conf);
  }, []);
  return <div className="oax-top-cont tripsSearch"></div>;
};

export default TripDetails;
