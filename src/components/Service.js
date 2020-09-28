import React from "react";
import service1 from "../res/images/resource/service-1.jpg"
import service2 from "../res/images/resource/service-2.jpg"
import service3 from "../res/images/resource/service-3.jpg"
import service4 from "../res/images/resource/service-4.jpg"
import service5 from "../res/images/resource/service-5.jpg"
import service6 from "../res/images/resource/service-6.jpg"

const Service = () => {
  return (
    <section className="services-section-two">
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            Our Awesome <span> Services </span>
          </h3>
          <div className="separater"></div>
        </div>
        <div className="row clearfix">
          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service1} alt="" />
                <h4>Air Freight</h4>
              </div>
            </div>
          </div>

          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInDown"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service2} alt="" />
                <h4>Sea Freight</h4>
              </div>
            </div>
          </div>

          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service3} alt="" />
                <h4>Road Freight </h4>
              </div>
            </div>
          </div>

          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service4} alt="" />
                <h4>Courier Services</h4>
              </div>
            </div>
          </div>

          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service5} alt="" />
                <h4>Fast Freight </h4>
              </div>
            </div>
          </div>

          <div className="services-block-three col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src={service6} alt="" />
                <h4>Track Cargo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
