import React from "react";
import DefaultLayout from '../components/Default'
import bg1 from "../res/images/background/12.jpg";

const Track = () => {
  return (
    <DefaultLayout>
      <section className="page-title" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="auto-container">
          <h2>Track & Trace</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <a href="index.html">Home</a> <span>/</span>
            </li>
            <li>Track & Trace</li>
          </ul>
        </div>
      </div>

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-9 col-md-12 col-sm-12">
              <div className="track-section">
                <div className="sec-title-two sec-title">
                  <h2>
                    Track & <span>Trace Shipment</span>
                  </h2>
                  <div className="separater"></div>
                </div>

                <div className="quote-form-box">
                  <form method="post" action="contact.html">
                    <div className="row clearfix">
                      <div className="form-group option-box col-lg-12 col-md-12 col-sm-12">
                        <div className="radio-box">
                          <input type="radio" name="gender" id="male" />
                          &nbsp;
                          <label htmlFor="male">Ocean Freight</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" name="gender" id="female" />
                          &nbsp;
                          <label htmlFor="female">Air Freight</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" name="gender" id="other" />
                          &nbsp;
                          <label htmlFor="other">Raod Freight</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="track-form-two">
                  <form method="post" action="quote.html">
                    <div className="form-group">
                      <label>Enter Tracking Number Here</label>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        placeholder="Enter your tracking number e.g CRG-11-XXXX"
                      />
                      <button type="submit" className="theme-btn submit-btn">
                        Track Your Shipment
                      </button>
                    </div>
                  </form>
                </div>

                <div className="tracking-info-detail">
                  <div className="tracking-box">
                    <div className="tracking-time-box">
                      <div className="tracking-time">Nov 26, 2018</div>
                      <span>03:36 AM</span>
                    </div>
                    <div className="tracking-location">
                      <strong>Delivered in California </strong>
                      Carga Office Near 10-G Location South
                    </div>
                  </div>
                  <div className="tracking-box">
                    <div className="tracking-time-box">
                      <div className="tracking-time">Nov 28, 2018</div>
                      <span>05:40 PM</span>
                    </div>
                    <div className="tracking-location style-two">
                      <strong>Out For Delivery </strong>
                      Union WareHouse 5th Avenue Block
                    </div>
                  </div>
                  <div className="tracking-box">
                    <div className="tracking-time-box">
                      <div className="tracking-time">Nov 29, 2018</div>
                      <span>12:35 PM</span>
                    </div>
                    <div className="tracking-location style-three">
                      <span className="dott"></span>
                      <strong>Arrive at Post Office</strong>
                      Local Post Office In Near Vicinity
                    </div>
                  </div>
                  <div className="tracking-box">
                    <div className="tracking-time-box">
                      <div className="tracking-time">Dec 02, 2018</div>
                      <span>03:10 AM</span>
                    </div>
                    <div className="tracking-location style-three">
                      <span className="dott"></span>
                      <strong>Departed Shipping Facility</strong>
                      Carga Office Departure Location Road
                    </div>
                  </div>
                  <div className="tracking-box">
                    <div className="tracking-time-box">
                      <div className="tracking-time">Dec 04, 2018</div>
                      <span>09:00 AM</span>
                    </div>
                    <div className="tracking-location style-three">
                      <span className="dott"></span>
                      <strong>Picked up by Shipping Partner </strong>
                      Will Be Delivered at Your Location
                    </div>
                  </div>
                </div>

                <div className="map-outer">
                  <div
                    className="map-canvas"
                    data-zoom="12"
                    data-lat="-37.817085"
                    data-lng="144.955631"
                    data-type="roadmap"
                    data-hue="#ffc400"
                    data-title="Envato"
                    data-icon-path="images/icons/map-marker.png"
                    data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
                  ></div>
                </div>
              </div>
            </div>

            <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
              <aside className="sidebar">
                <div className="sidebar-widget search-box">
                  <div className="sidebar-title">
                    <h2>Search</h2>
                  </div>
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Search"
                        required
                      />
                      <button type="submit">
                        <span className="icon fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="sidebar-widget category-box">
                  <div className="sidebar-title">
                    <h2>Categories</h2>
                  </div>
                  <ul className="category-list">
                    <li>
                      <a href="#">
                        Air Freight Services <span>( 10 )</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sea Frieght <span>( 06 )</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Industrial fire training <span>( 03 )</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Warehousing <span>( 07 )</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Transport <span>( 12 )</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Cargo Logistic <span>( 02 )</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h2>Latest Post</h2>
                  </div>
                  <article className="post">
                    <figure className="post-thumb">
                      <a href="blog-single.html">
                        <img src="images/resource/post-thumb-1.jpg" alt="" />
                      </a>
                    </figure>
                    <h4>
                      <a href="blog-single.html">Excepteur sint occaecat</a>
                    </h4>
                    <div className="text">
                      Quisque nec auctor, tincidunt ligulagh.
                    </div>
                    <div className="post-info">Oct 25, 2018</div>
                  </article>
                  <article className="post">
                    <figure className="post-thumb">
                      <a href="blog-single.html">
                        <img src="images/resource/post-thumb-2.jpg" alt="" />
                      </a>
                    </figure>
                    <h4>
                      <a href="blog-single.html">Excepteur sint occaecat</a>
                    </h4>
                    <div className="text">
                      Quisque nec auctor, tincidunt ligulagh.
                    </div>
                    <div className="post-info">Oct 25, 2018</div>
                  </article>
                  <article className="post">
                    <figure className="post-thumb">
                      <a href="blog-single.html">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                      </a>
                    </figure>
                    <h4>
                      <a href="blog-single.html">Excepteur sint occaecat</a>
                    </h4>
                    <div className="text">
                      Quisque nec auctor, tincidunt ligulagh.
                    </div>
                    <div className="post-info">Oct 25, 2018</div>
                  </article>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Track;
