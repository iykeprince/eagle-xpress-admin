import React, { Fragment } from "react";
import bg1 from "../res/images/background/12.jpg";
import SenderShipper from "../components/SenderShipper";
import DefaultLayout from "../components/Default";

const ListCourier = () => {
  return (
    <DefaultLayout>
      <section class="page-title" style={{ backgroundImage: `url(${bg1})` }}>
        <div class="auto-container">
          <h2>Contact Us</h2>
          <div class="separater"></div>
        </div>
      </section>

      <div class="breadcrumb-outer">
        <div class="auto-container">
          <ul class="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <section class="quote-section">
        <div class="auto-container">
          <div class="quote-form-box contact-page">
            <div class="sec-title centered">
              <h3>
                Give Us <span>Your Feedback</span>
              </h3>
              <div class="separater"></div>
              <div class="text">We Value Your Feedback Comments & Queries</div>
            </div>

            <form method="post" action="contact.html">
              <div class="row clearfix">
                <div class="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div class="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email ID"
                    required
                  />
                </div>
                <div class="form-group col-lg-4 col-md-6 col-sm-12">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Contact"
                    required
                  />
                </div>
                <div class="form-group col-lg-12 col-md-12 col-sm-12 col-lg-12">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                  <button type="submit" class="theme-btn btn-style-one">
                    Request a Quote / Give Feedback
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SenderShipper />
    </DefaultLayout>
  );
};

export default ListCourier;
