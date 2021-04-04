import React, { useEffect } from "react";
import { useParams } from "react-router";

const TripDetails = (props) => {
  const { id } = useParams();
  useEffect(() => {
    const conf = {
      id,
      actionOpenType: "in-page",
    };

    const fvp = window.oa.api.detailpage(conf);
  }, []);
  return <div className="oax-top-cont tripsSearch"></div>;
};

export default TripDetails;
