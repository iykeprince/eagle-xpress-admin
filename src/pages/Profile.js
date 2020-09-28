import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Default";
import firebase from "../Firebase";
import { withRouter } from "react-router-dom";

const Profile = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!firebase.getUsername()) {
      alert("please login");
      props.history.replace("/login");
      return null;
    }

    firebase
      .getProfile()
      .then((profileObject) => {
        // console.log("profile", profileObject.data());
        const profile = profileObject.data();
        setUsername(profile.name);
        setEmail(profile.email);
      })
      .catch((error) => alert(error.message));
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("updating profile");
  };

  return (
    <DefaultLayout>
      <section>
        <div className="auto-container">
          <h3 className="page-title">Profile</h3>
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
              </form>
              <p>Email: {email}</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withRouter(Profile);
