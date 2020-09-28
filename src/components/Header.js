import React from "react";
import logo from "../res/images/logo-2.png";
import logo2 from "../res/images/logo-small-2.png";
import { Link, withRouter } from "react-router-dom";
import firebase from "../Firebase";

const Header = (props) => {
  const logout = () => {
    firebase
      .logout()
      .then(() => props.history.replace("/login"))
      .catch((error) => alert(error.message));
  };
  return (
    <header className="main-header header-style-two">
      <div className="auto-container">
        <div className="header-inner">
          <div className="header-top">
            <div className="clearfix">
              <div className="top-right">
                <ul className="right-list">
                  <li>
                    <span className="icon flaticon-mail"></span>
                    <a
                      href="mailto:support@eaglexpress.com"
                      className="__cf_email__"
                    >
                      @eaglexpress.com
                    </a>
                  </li>
                  <li>
                    <span className="icon flaticon-phone-contact"></span>+444
                    987-321-300
                  </li>
                  <li>
                    <span className="icon flaticon-user"></span>{" "}
                    {firebase.getUsername()}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-upper">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <a href="/">
                    {/* <img src={logo} alt="" title="" /> */}
                    <h2 style={{ fontWeight: "bold", color: "black" }}>
                      EagleXpress
                    </h2>
                  </a>
                </div>
              </div>
              <div className="pull-right upper-right">
                <div className="header-lower">
                  <div className="nav-outer clearfix">
                    <nav className="main-menu navbar-expand-md">
                      <div className="navbar-header">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className="current dropdown">
                            <a href="https://eagle-xpress.com">Home</a>
                          </li>
                          <li>
                            <Link to="/">Dashboard</Link>
                          </li>
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                         
                            <li>
                              <Link to="/users">Users</Link>
                            </li>
                          
                          <li>
                            <button
                              onClick={logout}
                              className="btn mt-lg-4 mt-md-4"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </nav>

                    <div className="outer-box clearfix">
                      <div className="option-box">
                        <div className="search-box-outer">
                          <div className="dropdown">
                            <button
                              className="search-box-btn dropdown-toggle"
                              type="button"
                              id="dropdownMenu3"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="flaticon-route"></span>
                            </button>
                            <ul
                              className="dropdown-menu pull-right search-panel"
                              aria-labelledby="dropdownMenu3"
                            >
                              <li className="panel-outer">
                                <div className="form-container">
                                  <form method="post" action="blog.html">
                                    <div className="form-group">
                                      <input
                                        type="search"
                                        name="field-name"
                                        placeholder="Track Your Shipment"
                                      />
                                      <button
                                        type="submit"
                                        className="search-btn"
                                      >
                                        <span className="fa fa-search"></span>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <a href="index.html" className="img-responsive">
              <img src={logo2} alt="" title="" />
            </a>
          </div>

          <div className="right-col pull-right">
            <nav className="main-menu navbar-expand-md">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent1"
              >
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <a href="https://eagle-xpress.com">Home</a>
                  </li>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <button onClick={logout} className="btn mt-lg-4 mt-md-4">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
