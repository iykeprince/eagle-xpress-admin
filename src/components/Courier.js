import React, { useState } from "react";

import firebase from "../Firebase";


const Courier = ({
  courier,
  callConfirmation,
  refreshCourier,
  updateCallback,
  deleteCallback,
}) => {
  const [current, setCurrent] = useState({
    location: courier.current_location.location || "",
    lat: courier.current_location.lat || "",
    lng: courier.current_location.lng || "",
  });

  const handleChange = (e) => {
    setCurrent({
      ...current,
      [e.target.name]: e.target.value,
    });
  };

  const updateCourier = async () => {
    
    if (callConfirmation()) {
      firebase
        .updateCourier({ ...current, id: courier.id })
        .then((obj) => {
          console.log("update obje", obj);
          const historyObject = {
            ...current,
            id: courier.id,
            timestamp: firebase.getServerTimestamp(),
          };
          firebase.addHistory(historyObject);
          updateCallback(false, "Courier history & location updated", false);
        })
        .catch((error) => updateCallback(false, error.message));
    }
  };
  //, 151.263470
  const deleteCourier = async () => {
   
    if (callConfirmation()) {
      deleteCourier(true, "");
      firebase
        .deleteCourier(courier.id)
        .then(() => {
          console.log("courier deleted");
          deleteCallback(false, "Courier has been deleted");
          refreshCourier()
        })
        .catch((error) => deleteCallback(false, error.message));
    }
  };

  const markCourierDelivered = () => {
   
    if (callConfirmation()) {
      updateCallback(true, "");
      firebase
        .updateCourierStatus(courier.id, "delivered")
        .then(() => {
          updateCallback(false, "Courier status updaetd", false);
        })
        .catch((error) => updateCallback(false, error.message));
    }
  };

  return (
    <tr>
      <td>{courier.id}</td>
      <td>{courier.cargo.cargo_name}</td>
      <td>
        <input
          type="text"
          className="form-control"
          name="location"
          onChange={handleChange}
          value={current.location}
        />
      </td>
      <td>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            style={{ width: "100px" }}
            name="lat"
            onChange={handleChange}
            value={current.lat}
          />
          <span className="h3 ml-3 mr-3">/</span>
          <input
            type="text"
            className="form-control"
            name="lng"
            style={{ width: "100px" }}
            onChange={handleChange}
            value={current.lng}
          />
        </div>
      </td>
      <td>{courier.shipping_status}</td>
      <td>
        <div className="d-flex justify-content-between">
          <button onClick={updateCourier} className="btn btn-sm btn-info">
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={markCourierDelivered}
            className="btn btn-sm btn-success"
            disabled={courier.shipping_status === "delivered" ? true : false}
          >
            <i className="fa fa-check"></i> Mark Delivered
          </button>
          <button onClick={deleteCourier} className="btn btn-sm btn-danger">
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Courier;
