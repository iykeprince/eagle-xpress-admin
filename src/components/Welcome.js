import React from "react";
import welcomeImage from "../res/images/resource/welcome.jpg";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-column wowallow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title-two sec-title">
                <h2>
                  Welcome <span>To Carga</span>
                </h2>
                <div className="separater"></div>
              </div>
              <ul className="list-style-one">
                <li>
                  <span>100% Safe Delivery</span>We have accomplished 100% safe
                  delivery, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt dolore magna aliqua...
                </li>
                <li>
                  <span>Weather Insurance</span>Any weather any where, we
                  deliver to your commitement consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore...
                </li>
                <li>
                  <span>Fast & On Time Delivery</span>Fast and timly deliver is
                  our motto, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore...
                </li>
              </ul>
              <a href="#" className="theme-btn btn-style-four">
                Read More
              </a>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-column wowallow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={welcomeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
