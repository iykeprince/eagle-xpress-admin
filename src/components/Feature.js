import React from "react";

const Feature = () => {
  return (
    <section className="featured-section">
      <div className="outer-container">
        <div className="clearfix">
          <div className="feature-block">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-air-freight"></span>
              </div>
              <h3>
                <a href="#">Book Your Air Freight</a>
              </h3>
              <div className="text">100% Secure Payment System</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-tow"></span>
              </div>
              <h3>
                <a href="#">Book Your Road Freight</a>
              </h3>
              <div className="text">100% Secure Payment System</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-boat"></span>
              </div>
              <h3>
                <a href="#">Book Your Sea Freight</a>
              </h3>
              <div className="text">100% Secure Payment System</div>
            </div>
          </div>

          <div className="feature-block">
            <div className="inner-box">
              <div className="icon-box">
                <span className="icon flaticon-train-1"></span>
              </div>
              <h3>
                <a href="#">Book Your Train Freight</a>
              </h3>
              <div className="text">100% Secure Payment System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
