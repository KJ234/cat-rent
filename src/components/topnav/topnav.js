import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/images.jpeg";
import "./topnav.css";

function topnav() {
  return (
    <div className="top_nav">
      <div className="top_nav-wrapper">
        <div className="search_box">
          <input type="text" placeholder="Search or type" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top_nav-right">
          <span className="notification">
            <i class="ri-notification-line"></i>
            <span className="badge">1</span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImage} alt="profile-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topnav;
