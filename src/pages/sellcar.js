import React from "react";
import "../styles/sell-car.css";
import sellCat from "../assets/images/sell-cat.png";
import TabbyCat from "../assets/images/cat-png-40363.png";
import Cat from "../assets/images/hello.png";
import TrackingChart from "../charts/Trackingchart";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';




function sellcar() {
  const percentage = 55;
  const percentage02 = 45;

  return (

    <div className="sell_car">
      <div className="sell_car-wrapper">
        <h2 className="sell_car-title">Sell Cats</h2>
        <div className="sell_car-top">
          <div className="sell_car-img">
            <h2>2022 Popular cat: **Ragdoll**</h2>
            <img src={sellCat} alt="" />
          </div>

          <div className="tracking_history">
            <h3>Sales</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer_wrapper">
          <div className="offer_top">
            <h2 className="sell_car-title">Offers</h2>


          </div>

          <div className="offer_list">
            <div className="offer_item">
          <img src={Cat} alt="tabby" />
              <div className="box_01">

                <h6 className="avg_price">
                  £200 <span>average price</span>
                </h6>

                <h6 className="market_price">Market average is between £200–£2000</h6>
                <span className="arrow_key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle_wrapper">
                <div className="box_02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
              </div>

              <div className="box_03">
                <span className="model_spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend_amount">£50</h6>
                <p className="spend_title">Breed Spend</p>
              </div>




            </div>
            <div className="offer_item">
              <img src={TabbyCat} alt="tabby" />
              <div className="box_01">
                <h6 className="avg_price">
                  £100 <span>average price</span>
                </h6>

                <h6 className="market_price">Market average is between £200–£2000</h6>
                <span className="arrow_key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle_wrapper">
                <div className="box_02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  />
                </div>
              </div>

              <div className="box_03">
                <span className="model_spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend_amount">£80</h6>
                <p className="spend_title">Breed Spend</p>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default sellcar;
