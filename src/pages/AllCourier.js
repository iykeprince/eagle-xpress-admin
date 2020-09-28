import React, { Fragment } from "react";
import bg1 from '../res/images/background/12.jpg';

const AllCourier = () => {
  return (
    <Fragment>
      <section
        className="page-title"
        style={{backgroundImage: `url(${bg1})`}}
      >
        <div className="auto-container">
          <h2>Offered Services</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>

      <section className="services-section page-view red">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-sea-ship-with-containers"></span>
                </div>
                <h2>
                  <a href="#">Sea Freight</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-airplane-shape"></span>
                </div>
                <h2>
                  <a href="#">Air Freight</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-fast-delivery"></span>
                </div>
                <h2>
                  <a href="#">Courier Services</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-shipping-and-delivery"></span>
                </div>
                <h2>
                  <a href="#">Storage Services</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-train-front"></span>
                </div>
                <h2>
                  <a href="#">Fast Freight</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-gps"></span>
                </div>
                <h2>
                  <a href="#">Track Your Cargo</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-sea-ship-with-containers"></span>
                </div>
                <h2>
                  <a href="#">Sea Freight</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-airplane-shape"></span>
                </div>
                <h2>
                  <a href="#">Air Freight</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>

            <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-fast-delivery"></span>
                </div>
                <h2>
                  <a href="#">Courier Services</a>
                </h2>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et laboris .
                </div>
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <ul className="styled-pagination text-center">
            <li className="prev">
              <a href="#">
                <span className="fa fa-angle-left"></span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#" className="active">
                2
              </a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default AllCourier;
