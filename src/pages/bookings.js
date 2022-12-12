import React from "react";
import "../styles/bookings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import Caritem from "../components/UI/Caritem";

function bookings() {
  return (
    <div className="bookings">
      <div className="booking_wrapper">
        <h2 className="booking_title">Booking</h2>
        <div className="filter_widget-wrapper">
          <div className="filter_widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div className="filter_widget-01">
            <select>
              <option value="Shorthair">Shorthair</option>
              <option value="Persian cat">Persian cat</option>
              <option value="Siamese cat">Siamese cat</option>
              <option value="Abyssinian cat">Abyssinian cat</option>
              <option value="Egyptian Mau">Egyptian Mau</option>
              <option value="Tabby cat">Tabby cat</option>
              <option value="Maine Coon">Maine Coon</option>
              <option value="Bengal cat">Bengal cat</option>
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
