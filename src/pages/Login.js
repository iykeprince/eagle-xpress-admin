import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Default";
import firebase from "../Firebase";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("All fields are required");
    } else {
      setLoading(true);
      try {
        await firebase.login(email, password);

        setLoading(false);
        props.history.replace("/");
      } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
      }
    }
  };

  return (
    <div className="container">
      <section className="center-container">
        <div className="row">
          <div className="col-lg-3 hidden-for-medium-down"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-5">
            <h3>Sign in</h3>
            <p>Please enter your admin login credentials</p>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <form onSubmit={onSubmit}>
              <div className="row clearfix">
                <div className="form-group col-sm-12">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-group  col-sm-12">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-danger mr-auto"
                    style={{ marginRight: "30px" }}
                  >
                    Sign in
                  </button>
                  <Link to="/register" className="btn btn-primary">
                    <i className="fa fa-user"></i> Create Account
                  </Link>
                </div>
                {loading ? <h3>Loading</h3> : ""}
              </div>
            </form>
          </div>
          <div className="col-md-3 hidden-for-medium-down"></div>
        </div>
      </section>
    </div>
  );
};

export default Login;
