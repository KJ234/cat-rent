import React from "react";
import "../styles/bookings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import Caritem from "../components/UI/Caritem";

function bookings() {
  return (
    <div className="booking">
      <div className="booking_wrapper">
        <h2 className="booking_title">Booking</h2>
        <div className="filer_widget-wrapper">
          <div className="filter_widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div className="filter_widget-01">
            <select>
              <option value="toyota">toyota</option>
              <option value="bmw">bmw</option>
              <option value="audi">audi </option>
            </select>
          </div>
        </div>
        <div className="booking_car-list">
          {carData?.map((item) => (
            <Caritem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default bookings;
