import React from "react";
import team1 from "../res/images/clients/38.jpg";
import team2 from "../res/images/clients/39.jpg";
import team3 from "../res/images/clients/40.jpg";
import team4 from "../res/images/clients/41.jpg";

const Team = () => {
  return (
    <section className="team-section gap">
      <div className="auto-container">
        <div className="sec-title centered">
          <h3>
            Professional <span>Team</span>
          </h3>
          <div className="separater"></div>
        </div>
        <div className="tem-sec">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="tm-bx">
                <div className="tm-thmb">
                  <a href="#">
                    <img src={team1} />
                  </a>
                  <div className="tm-inf">
                    <h5>
                      <a href="#">Tim Patinson</a>
                    </h5>
                    <span className="designation">Cargo Supervisor</span>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="tm-bx">
                <div className="tm-thmb">
                  <a href="#">
                    <img src={team2} alt="Team-Image.jpg" />
                  </a>
                  <div className="tm-inf">
                    <h5>
                      <a href="#" title="">
                        Jina Patinson
                      </a>
                    </h5>
                    <span className="designation">Shipping Manager</span>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="tm-bx">
                <div className="tm-thmb">
                  <a href="#">
                    <img src={team3} alt="Team-Image.jpg" />
                  </a>
                  <div className="tm-inf">
                    <h5>
                      <a href="#" title="">
                        Mark Hustler
                      </a>
                    </h5>
                    <span className="designation">Tracking Dept</span>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="tm-bx">
                <div className="tm-thmb">
                  <a href="#">
                    <img src={team4} alt="Team-Image.jpg" />
                  </a>
                  <div className="tm-inf">
                    <h5>
                      <a href="#" title="">
                        John Doe
                      </a>
                    </h5>
                    <span className="designation">IT Technician</span>
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
                    </ul>
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

export default Team;
