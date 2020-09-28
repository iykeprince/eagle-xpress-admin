import React from "react";
import bg1 from "../res/images/background/3.jpg";
import bg2 from "../res/images/background/4.png";

const Counter = () => {
  return (
    <section
      className="counter-section"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="auto-container">
        <div className="row clearfix">
          <div className="order-column col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-column"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <div className="icon-box">
                <span className="icon flaticon-fast-delivery"></span>
              </div>
              <h2>Track Your Order</h2>
              <div className="text">Enter your Track Id For Instant Search</div>

              <div className="track-form">
                <form method="post" action="contact.html">
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      placeholder="Tracking ID"
                      required
                    />
                    <button type="submit" className="theme-btn">
                      <span className="fa fa-search"></span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="social-box">
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-google-plus"></a>
              </div>
            </div>
          </div>

          <div className="counter-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="fact-counter">
                <div className="clearfix">
                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="60"
                          >
                            0
                          </span>
                        </div>
                        <h4 className="counter-title">Years Experience</h4>
                      </div>
                    </div>
                  </div>

                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box alternate">
                          <span
                            className="count-text"
                            data-speed="2800"
                            data-stop="2500"
                          >
                            0
                          </span>
                          +
                        </div>
                        <h4 className="counter-title">Professional Workers</h4>
                      </div>
                    </div>
                  </div>

                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed="2500"
                            data-stop="80"
                          >
                            0
                          </span>
                          %
                        </div>
                        <h4 className="counter-title">Areas Covered</h4>
                      </div>
                    </div>
                  </div>

                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="205"
                          >
                            0
                          </span>
                          +
                        </div>
                        <h4 className="counter-title">Countries Covered</h4>
                      </div>
                    </div>
                  </div>

                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="180"
                          >
                            0
                          </span>
                          +
                        </div>
                        <h4 className="counter-title">Corporate Clients</h4>
                      </div>
                    </div>
                  </div>

                  <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner">
                      <div className="content">
                        <div className="count-outer count-box">
                          <span
                            className="count-text"
                            data-speed="2000"
                            data-stop="450"
                          >
                            0
                          </span>
                          +
                        </div>
                        <h4 className="counter-title">Owned Vehicles</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
