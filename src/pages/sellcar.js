import React from "react";
import "../styles/sell-car.css";
import sellCar from "../assets/images/sell-car.png";
import TrackingChart from "../charts/Trackingchart";

function sellcar() {
  return (
    <div className="sell_car">
      <div className="sell_car-wrapper">
        <h2 className="sell_car-title">Sell cars</h2>
        <div className="sell_car-top">
          <div className="sell_car-img">
            <h1>2022 Mercedes Benz</h1>
            <img src={sellCar} alt="" />
          </div>
          <div className="tracking_history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default sellcar;
