import React, { useState } from "react";
import firebase from "../Firebase";
import { withRouter, Link } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("All fields are required");
    } else {
      setLoading(true);
      firebase
        .register(name, email, password)
        .then((result) => {
          //adding users details
          firebase
            .addUser({ name, email, password, isAdmin: false })
            .then((res) => console.log("user added", res))
            .catch((e) => console.log("user error", e));
          setLoading(false);
          console.log("register", result);
          props.history.replace("/");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="container">
      <section className="center-container">
        <div className="row">
          <div className="col-md-3 hidden-for-medium-down"></div>
          <div className="col-md-6 p-5">
            <h3>Register</h3>
            <p>please fill in all fields</p>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <form onSubmit={onSubmit}>
              <div className="row clearfix">
                <div className="form-group col-sm-12">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
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
                <div className=" p-3">
                  <button type="submit" className="btn btn-danger mr-auto">
                    Sign
                  </button>
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                </div>
                {loading ? "loading.. please " : ""}
              </div>
            </form>
          </div>
          <div className="col-md-3 hidden-for-medium-down"></div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Register);
