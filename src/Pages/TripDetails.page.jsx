import React, { createElement, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Rating from "react-rating";
import axios from "axios";

import AppContext from "../components/AppContext/AppContext.component";
import Btn from "../components/Btn/Btn.component";

// oax-head-btn-cont
const TripDetails = (props) => {
  const tripRef = useRef(null);
  const appContext = useContext(AppContext);
  const { id } = useParams();

  const determineRate = () => {
    console.log(appContext);
    const trip = appContext.userTripsRatingList.find((trip) => trip.tripId === id);
    if (trip) return trip.rate;
    return 0;
  };

  let [rate, setRate] = useState(determineRate());
  let fvp;
  const toggleTripInList = (id) => {
    const index = appContext.tripsList.findIndex((trip) => trip.tripId === id);
    if (index >= 0) appContext.setTripsList((tripsList) => tripsList.filter((trip) => trip.tripId !== id));
    else appContext.setTripsList((tripsList) => [...tripsList, { tripId: id, point: appContext.destination }]);
  };

  useEffect(() => {
    const conf = {
      id,
      actionOpenType: "in-page",
    };

    fvp = window.oa.api.detailpage(conf);
  }, []);

  const updateRating = async (value) => {
    const tripFromUserRatingList = appContext.userTripsRatingList.find((trip) => trip.tripId === id);
    if (tripFromUserRatingList) {
      appContext.setUserTripsRatingList((tripsRating) =>
        tripsRating.map((trip) => {
          if (trip.tripId === id) return { ...trip, rate: value };
          return trip;
        })
      );
      // tripFromUserRatingList = { ...tripFromUserRatingList, rate: value };
    } else {
      appContext.setUserTripsRatingList((tripsRating) => [...tripsRating, { tripId: id, rate: value }]);
      // const newTripRating = async() =>{
      //   const {data} = axios.post({tripId:,point:,ratings:})
      // }
    }

    const tripFromTripsRatingList = appContext.tripsRatingList.find((trip) => trip.tripId === id);
    if (tripFromTripsRatingList) {
      const newTripsRatingList = appContext.tripsRatingList.map((trip) => {
        if (trip.tripId === id) {
          const { ratings } = trip;
          return {
            ...trip,
            ratings: ratings.map((rating) => (rating.gid === appContext.user.gid ? { ...rating, rate: value } : rating)),
          };
        }
        return trip;
      });
      const { data } = await axios.get("https://606bf444f8678400172e6d03.mockapi.io/trips");
      const tripData = data.find((apiTrip) => apiTrip.tripId === id);
      if (tripData) {
        console.log(newTripsRatingList);
        const dataFromUpdate = (
          await axios.put(
            `https://606bf444f8678400172e6d03.mockapi.io/trips/${tripData.id}`,
            newTripsRatingList.find((trip) => trip.tripId === id)
          )
        ).data;
      }
      appContext.setTripsRatingList(newTripsRatingList);
    } else {
      const { data } = await axios.post("https://606bf444f8678400172e6d03.mockapi.io/trips", {
        tripId: appContext.tripId,
        point: appContext.destination,
        ratings: [{ gid: appContext.user.gid, rate: value }],
      });
      appContext.setTripsRatingList((tripsRating) => [...tripsRating, data]);
    }

    setRate(value);
  };

  return (
    <div>
      <div className="controls">
        <Rating initialRating={rate} onChange={updateRating} />
        <Btn
          btnTxt={
            appContext.tripsList.find((trip) => trip.tripId === id) ? (
              <span>Remove from trips cart &#128722;</span>
            ) : (
              <span>Add to trips cart &#128722;</span>
            )
          }
          onClick={() => toggleTripInList(id)}
        />
      </div>
      <div ref={tripRef} className="oax-top-cont"></div>
    </div>
  );
};

export default TripDetails;
