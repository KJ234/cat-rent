import React from 'react'

function Recommendcar(props) {

    const {carName, retweet, imgURL, rentPrice, percentage } = props.item


  return (
    <div>
      <div className="recommend_car-card">
            <div className="recommend_car-top">
              <h1>
                <span>
                  <i class="ri-refresh-line"></i>
                </span>
                {percentage}
              </h1>
            </div>
            <div className="recommenf_car-img">
              <img src={imgURL} alt="car-img" />
            </div>
            <div className="recommend_car-bottom">
              <h4>{carName}</h4>
              <div className="recommend_car-other">
                <div className="recommend_icons">
                  <p>
                    <span>
                      <i class="ri-repeat-line"></i>{retweet}
                    </span>
                  </p>
                  <p><i class="ri-settings-5-line"></i></p>
                  <p>
                    <span>
                      <i class="ri-timer-flash-line"></i>
                    </span>
                  </p>
                  <span>{rentPrice}</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Recommendcar
