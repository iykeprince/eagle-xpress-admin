import React from "react";
import banner from '../res/images/background/8.jpg';

const Banner = () => {
  return (
    <section
      className="banner-section-two"
      style={{backgroundImage: `url(${banner})`}}
    >
      <div className="auto-container">
        <div className="content-column">
          <div
            className="inner-column wow slideInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <h1>WE DELIVER ON TIME </h1>
            <div className="text">
              Join the millions getting bargain deals on shipping cars, <br />{" "}
              furniture, freight, and more..
            </div>

            <div
              className="banner-form-two wow slideInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <form method="post" action="index.html">
                <div className="row clearfix">
                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <input
                      type="text"
                      name="emailid"
                      placeholder="Enter your Email ID"
                      required
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <input
                      type="text"
                      name="trackid"
                      placeholder="Enter Your Track ID"
                      required
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                    <button type="submit" className="theme-btn btn-style-three">
                      Search Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
