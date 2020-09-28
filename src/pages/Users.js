import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/Default";
import { Link } from "react-router-dom";
import firebase from "../Firebase";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
import Spinner from "../components/Spinner";
import User from "../components/User";
import bg1 from "../res/images/background/12.jpg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (firebase.getUsername) {
      getUsers();
    }
  }, []);

  const getUsers = () => {
    if (firebase.getUsername()) {
      setLoading(true);
      let array = [];

      firebase
        .getUsersWhere()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            array.push({ id: doc.id, ...doc.data() });
          });
          console.log("array", array);
          setUsers(array);
          setLoading(false);
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };
  const deleteCallback = (isLoading, message, isError = true) => {
    setLoading(isLoading);
    if (!isError) {
      setSuccessMessage(message);
    } else {
      setErrorMessage(message);
    }
    getUsers();
  };

  return (
    <DefaultLayout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="auto-container">
          <h2>Users Record</h2>
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
        </div>
        <hr></hr>
      </section>

      <section>
        <div className="auto-container">
          <ErrorMessage errorMessage={errorMessage} />
          <SuccessMessage successMessage={successMessage} />
          <Spinner loading={loading} />
          {users.length === 0 ? (
            <div className="card p-5 mb-5">
              <div className="card-body">
                <h4>No users yet</h4>
              </div>
            </div>
          ) : (
            <div className="card p-5 mb-5">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <User
                          key={user.id}
                          user={user}
                          deleteCallback={deleteCallback}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Users;
