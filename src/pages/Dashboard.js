import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import bg1 from "../res/images/background/12.jpg";
// import bg6 from "../res/images/background/6.jpg";
import DefaultLayout from "../components/Default";

import firebase from "../Firebase";
import ErrorMessage from "../components/ErrorMessage";
import Courier from "../components/Courier";
import SuccessMessage from "../components/SuccessMessage";
import Spinner from "../components/Spinner";

const Dashboard = (props) => {
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (firebase.getUsername) {
      getCouriers();
    }
  }, []);

  const getCouriers = async () => {
    if (firebase.getUsername()) {
      setLoading(true);
      let array = [];

      firebase
        .getCouriers()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            array.push({ id: doc.id, ...doc.data() });
          });
          // console.log("array", array);
          setCouriers(array);
          setLoading(false);
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  if (!firebase.getUsername()) {
    console.log("please login");
    props.history.replace("/login");
    return null;
  }

  const updateCallback = (isLoading, message, isError = true) => {
    setLoading(isLoading);
    if (!isError) {
      setSuccessMessage(message);
    } else {
      setErrorMessage(message);
    }
  };
  const deleteCallback = (isLoading, message, isError = true) => {
    setLoading(isLoading);
    if (!isError) {
      setSuccessMessage(message);
    } else {
      setErrorMessage(message);
    }
  };

  const callConfirmation = () => {
    return window.confirm("Do you really want to continue?");
  };

  const refreshCourier = () => {
    if (firebase.getUsername) {
      getCouriers();
    }
  };

  return (
    <DefaultLayout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="auto-container">
          <h2>Record Management</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <Link to="/">Home</Link> <span>/</span>
            </li>
            <li>Record Keeping System</li>
          </ul>
        </div>
      </div>

      <section className="quote-section create-record">
        <div className="auto-container">
          <h2>
            <strong>Welcome {firebase.getUsername()},</strong>
          </h2>
          <p>
            <span className="theme-clr">
              You can access whole system from here; Create, Find, Update or
              Delete shipment information.
            </span>
          </p>
          <Link to="/add-courier" className="theme-btn btn-style-one">
            Add New Shipment
          </Link>
        </div>
        <hr></hr>
      </section>

      <section>
        <div className="auto-container">
          <ErrorMessage errorMessage={errorMessage} />
          <SuccessMessage successMessage={successMessage} />
          <Spinner loading={loading} />
          <div className="container m-2">
            {couriers.length === 0 ? (
              <div className="d-flex justify-content-center p-5 m-5">
                <div className="card-panel">
                  <h4>
                    No Courier in your port yet!{" "}
                    <span className="mute-text">
                      Click the <strong>'Add New Shipment' Button</strong> to get
                      started!
                    </span>
                  </h4>
                </div>
              </div>
            ) : (
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Couriers</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-stripe">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Courier</th>
                          <th>Location</th>
                          <th>Lat/Lng</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {couriers.map((courier) => (
                          <Courier
                            key={courier.id}
                            courier={courier}
                            updateCallback={updateCallback}
                            deleteCallback={deleteCallback}
                            callConfirmation={callConfirmation}
                            refreshCourier={refreshCourier}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withRouter(Dashboard);
