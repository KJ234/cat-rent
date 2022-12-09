import React from "react";
import "../styles/dashboard.css";
import Singlecard from "../components/reusable/singlecard";
import MileChart from "../charts/mileChart";
import Carstats from "../charts/Catstats";
import Recommendcar from "../components/UI/Recommendcar";
import recommendCarsData from '../assets/dummy-data/recommendCats'

const cardObj = {
  title: "Total Cats",
  totalNumber: 750,
  icon: "ri-bear-smile-line",
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
  title: "Used daily",
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
            <h3 className="stats_title">Rented Statistics</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3 className="stats_title">Cat Statistics</h3>
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
