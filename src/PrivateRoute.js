import React, { useState, useEffect, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./Firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("is authenticated", user);
          setIsAuthenticated(true);
          // ...
        } 
      });
      return () => { isMounted = false };
      //eslint-disable-next-line
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} isAuthenticated={isAuthenticated} />
        )
      }
    />
  );
};

export default PrivateRoute;
