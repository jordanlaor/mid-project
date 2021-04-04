import React, { useEffect } from "react";

const TripsSearch = (props) => {
  const { frontendtype, zoom, center } = props;
  useEffect(() => {
    const conf = {
      frontendtype, // choose content type
      zoom, // set initial zoom level
      center, // set initial map center
      actionOpenType: "page-load",

      openOOIUrl: function (data) {
        return `trip/${data.id}`;
      },
    };

    const fvp = window.oa.api.flexviewpage(conf);
  }, []);
  return <div className="oax-top-cont tripsSearch"></div>;
};

export default TripsSearch;
