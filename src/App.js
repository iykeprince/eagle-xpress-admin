import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ListCourier from "./pages/ListCourier";
import AddCourier from "./pages/AddCourier";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import firebase from './Firebase';
import Preloader from "./components/Preloader";

const App = () => {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    if(firebase.isInitialized()){
      setFirebaseInitialized(true)
    }
  })
  
  return firebaseInitialized ? (
    <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/couriers' component={ListCourier} />
          <Route exact path='/add-courier' component={AddCourier} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/users' component={Users} />
        </Switch>
    </Router>
  ) : (
    // <Preloader/>
  <h3>Loading...</h3>
  );
}
  
export default App;
