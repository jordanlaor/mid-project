import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../components/AppContext/AppContext.component";
import Btn from "../components/Btn/Btn.component";

const Home = () => {
  const appContext = useContext(AppContext);
  console.log(appContext);
  const topRatedRender = () => {
    const trips = [];
    console.dir(appContext.tripsRatingList);
    appContext.tripsRatingList.forEach((trip) => {
      const avRating = trip.ratings.reduce((sum, rate) => sum + rate.rate, 0) / trip.ratings.length;
      trips.push({ title: trip.tripTitle, point: trip.point, rate: avRating, tripId: trip.tripId });
    });
    trips.sort((a, b) => b.rate - a.rate);
    console.table(trips);
    const tripsBtns = [];
    for (let i = 0; i < 3 && i < trips.length; i++) {
      tripsBtns.push(
        <Link to="/tripssearch" key={trips[i].tripId}>
          <Btn onClick={() => appContext.setDestination(trips[i].point)} btnTxt={trips[i].title} />
        </Link>
      );
    }
    return tripsBtns;
  };
  return (
    <div className="home">
      <h2>Hello {appContext.user.name}!</h2>
      {appContext.tripsRatingList && topRatedRender()}
      <Link to="/tripssearch">
        <Btn
          onClick={() => {}}
          btnTxt={
            appContext.tripsRatingList.length ? (
              <span>I want to choose another destination &#129406;</span>
            ) : (
              <span>Start searching for trips &#129406;</span>
            )
          }
        />
      </Link>
    </div>
  );
};

export default Home;
