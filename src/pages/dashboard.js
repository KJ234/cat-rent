import React from "react";
import "../styles/dashboard.css";
import Singlecard from "../components/reusable/singlecard";
import MileChart from "../charts/mileChart";
import Carstats from "../charts/Carstats";
import Recommendcar from "../components/UI/Recommendcar";
import recommendCarsData from '../assets/dummy-data/recommendCars'

const cardObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};
const tripObj = {
  title: "Daily Trips",
  totalNumber: 1434,
  icon: "ri-steering-2-line",
};
const clientObj = {
  title: "Clients Annually",
  totalNumber: "90k",
  icon: "ri-user-line",
};
const distanceObj = {
  title: "Miles daily",
  totalNumber: "1987",
  icon: "ri-timer-flash-line",
};

function dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_wrapper">
        <div className="dashboard_cards">
          <Singlecard item={cardObj} />
          <Singlecard item={tripObj} />
          <Singlecard item={clientObj} />
          <Singlecard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats_title">Miles Statistics</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3 className="stats_title">Car Statistics</h3>
            <Carstats />
          </div>
        </div>
        <div className="recommend_cars-wrapper">
          {recommendCarsData.map((item) => (
            <Recommendcar item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default dashboard;
