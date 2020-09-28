import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section gap">
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            Client <span>Testimonials</span>
          </h3>
          <div className="separater"></div>
        </div>
        <OwlCarousel className="two-item-carousel owl-carousel owl-theme" loop margin={10} nav>
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="quote-icon flaticon-left-quote"></div>
              <div className="text">
                Using it since 2005, best courier ipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation.Ut enim ad minim veniam,
                quis nostrud exercitation.
              </div>
              <div className="author-info">
                <div className="info-inner">
                  <div className="author-image">
                    <img src="images/resource/author-2.jpg" alt="" />
                  </div>
                  <h4>William Jhon</h4>
                  <div className="designation">Shipment Client</div>

                  <div className="social-box">
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-google-plus"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-block">
            <div className="inner-box">
              <div className="quote-icon flaticon-left-quote"></div>
              <div className="text">
                Providing best services from last 20+ Years, trusted worldwide
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ut
                enim ad minim veniam, quis nostrud exercitation.
              </div>
              <div className="author-info">
                <div className="info-inner">
                  <div className="author-image">
                    <img src="images/resource/author-1.jpg" alt="" />
                  </div>
                  <h4>Kristie Hans</h4>
                  <div className="designation">Associated Engineer</div>

                  <div className="social-box">
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-google-plus"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-block">
            <div className="inner-box">
              <div className="quote-icon flaticon-left-quote"></div>
              <div className="text">
                Used it once and never looked back, Totally awesome elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.Ut enim ad minim
                veniam, quis nostrud exercitation.
              </div>
              <div className="author-info">
                <div className="info-inner">
                  <div className="author-image">
                    <img src="images/resource/author-1.jpg" alt="" />
                  </div>
                  <h4>Mylie Joseph</h4>
                  <div className="designation">General Manager</div>

                  <div className="social-box">
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-google-plus"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-block">
            <div className="inner-box">
              <div className="quote-icon flaticon-left-quote"></div>
              <div className="text">
                Tried first time in desperate need and it turns out great, elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Ut
                enim ad minim veniam, quis nostrud exercitation.
              </div>
              <div className="author-info">
                <div className="info-inner">
                  <div className="author-image">
                    <img src="images/resource/author-2.jpg" alt="" />
                  </div>
                  <h4>William Jhone k</h4>
                  <div className="designation">General Manager</div>

                  <div className="social-box">
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-google-plus"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
