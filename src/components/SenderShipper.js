import React from "react";
import bg2 from "../res/images/background/5.jpg";
import bg3 from "../res/images/background/6.jpg";

const SenderShipper = () => {
  return (
    <section className="fullwidth-section">
      <div className="outer-container">
        <div className="clearfix">
          <div
            className="left-column"
            style={{backgroundImage: `url(${bg2})`}}
          >
            <div className="inner-column">
              <h3>Are You A Sender?</h3>
              <div className="text">
                We have multiple lucrative packages for the individual senders,
                sed do eiusmod tempor incididunt ut labore.
              </div>
              <a href="#" className="theme-btn btn-style-one">
                Check Packages
              </a>
            </div>
          </div>

          <div
            className="right-column"
            style={{backgroundImage: `url(${bg3})`}}
          >
            <div className="inner-column">
              <h3>Are You A Shipper?</h3>
              <div className="text">
                Lucrative incentives and facilities for large scale shipping
                consignments, tempor incididunt ut labore.
              </div>
              <a href="#" className="theme-btn btn-style-two">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenderShipper;
