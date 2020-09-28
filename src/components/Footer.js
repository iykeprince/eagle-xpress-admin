import React from "react";
import bg from '../res/images/background/7.png';
import news1 from "../res/images/resource/news-image-1.jpg";
import news2 from "../res/images/resource/news-image-2.jpg";
import news3 from "../res/images/resource/news-image-3.jpg";

const Footer = () => {
  return (
    <div>
      <footer
        className="main-footer style-two"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <h2>
                        <span className="icon fa fa-thumbs-o-up"></span>Useful Links
                      </h2>
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <ul className="footer-list">
                            <li>
                              <a href="#">About us</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="#">Latest blogs</a>
                            </li>
                            <li>
                              <a href="#">Track & trace</a>
                            </li>
                            <li>
                              <a href="#">Contact us</a>
                            </li>
                            <li>
                              <a href="#">Social media</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <ul className="footer-list">
                            <li>
                              <a href="#">Company</a>
                            </li>
                            <li>
                              <a href="#">Latest jobs</a>
                            </li>
                            <li>
                              <a href="#">Partners</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                            <li>
                              <a href="#">Blog post</a>
                            </li>
                            <li>
                              <a href="#">Contact us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget news-widget">
                      <h2>
                        <span className="icon fa fa-bullhorn"></span>Recent News
                      </h2>

                      <div className="news-widget-block">
                        <div className="widget-inner">
                          <div className="image">
                            <img
                              src={news1}
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="blog-detail.html">
                              Lorem ipsum dolor sitam et, mandamus his ad
                            </a>
                          </h3>
                          <div className="post-date">Sept 26, 2018</div>
                        </div>
                      </div>

                      <div className="news-widget-block">
                        <div className="widget-inner">
                          <div className="image">
                            <img
                              src={news2}
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="blog-detail.html">
                              Lorem ipsum dolor sitam et, mandamus his ad
                            </a>
                          </h3>
                          <div className="post-date">Oct 29, 2018</div>
                        </div>
                      </div>

                      <div className="news-widget-block">
                        <div className="widget-inner">
                          <div className="image">
                            <img
                              src={news3}
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="blog-detail.html">
                              Lorem ipsum dolor sitam et, mandamus his ad
                            </a>
                          </h3>
                          <div className="post-date">Jan 26, 2020</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget mail-widget">
                      <h2>
                        <span className="icon fa fa-envelope-o"></span>Mailing List
                      </h2>
                      <div className="text">
                        Sign up for our mailing list to get latest updates and
                        offers.
                      </div>

                      <div className="email-form">
                        <form method="post" action="quote.html">
                          <div className="form-group clearfix">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email address"
                            />
                            <button type="submit" className="theme-btn submit-btn">
                              <span className="icon fa fa-check"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="text wid-notice">
                        (No Spam, We respect your privacy)
                      </div>
                    </div>
                  </div>

                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget about-widget">
                      <h2>
                        <span className="icon fa fa-user"></span>About Us
                      </h2>
                      <div className="text">
                        Lorem ipsum dolor sit amet, conec tetur adipisicing
                        elit, sed do eiusd tempor incididunt ut labore dolore
                        magna aliqua tempor.
                      </div>
                      <div className="phone-number">0044 123 456</div>
                      <div className="about-email">
                        <a
                          href="mailto:support@eaglexpress.com"
                          className="__cf_email__"
                        >
                          support@eaglexpress.com
                        </a>
                      </div>

                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fa fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-google-plus"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-instagram"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-youtube"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            EagleXpress &copy; {new Date().getFullYear()} / ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
