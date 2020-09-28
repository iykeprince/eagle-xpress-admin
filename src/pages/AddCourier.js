import React, { useState, useEffect } from "react";
import welcomeBg from "../res/images/resource/welcome.jpg";
import bg1 from "../res/images/background/12.jpg";
import bg2 from "../res/images/background/3.jpg";
import bg3 from "../res/images/background/4.png";

import team1 from "../res/images/clients/38.jpg";
import team2 from "../res/images/clients/39.jpg";
import team3 from "../res/images/clients/40.jpg";
import team4 from "../res/images/clients/41.jpg";

import client1 from "../res/images/clients/1.png";
import client2 from "../res/images/clients/2.png";
import client3 from "../res/images/clients/3.png";
import client4 from "../res/images/clients/4.png";
import { Link, withRouter } from "react-router-dom";
import DefaultLayout from "../components/Default";
import firebase from "../Firebase";

const AddCourier = (props) => {
  const [cargoName, setCargoName] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [packaging, setPackaging] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalWeight, setTotalWeight] = useState("");

  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  const [customerName, setCustomerName] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState({
    location: "",
    lat: "",
    lng: "",
  });
  const [departureLocation, setDepartureLocation] = useState({
    location: "",
    lat: "",
    lng: "",
  });
  const [insuranceRequired, setInsuranceRequired] = useState(true);
  const [ownerId, setOwnerId] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [shippingCode, setShippingCode] = useState("");
  const [shippingMode, setShippingMode] = useState("");
  const [shippingStatus, setShippingStatus] = useState("shipped");
  const [additionDetail, setAdditionDetail] = useState("");
  const [message, setMessage] = useState("");

  const shippingModes = ["Ocean Freight", "Air Freight", "Road Freight"];

  const weightUnits = ["Kg", "Mts", "Ton", "Lbs"];

  const packagings = [
    "Bales",
    "Bundles",
    "Cartons",
    "Cases",
    "Drums",
    "Pallets",
    "Sacks",
    "Unpacking",
    "Container 20'",
    "Container 40'",
  ];

  const cargoTypes = [
    "Not perishable and not dangerous products",
    "Perishable",
    "Hazardous",
    "Other",
  ];

  const generateShipCode = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    if (shippingCode === "") {
      setShippingCode(generateShipCode(8));
    }

  }, [shippingCode]);

  const onChangeDeparture = (e) => {
    setDepartureLocation({
      ...departureLocation,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDelivery = (e) => {
    setDeliveryLocation({
      ...deliveryLocation,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const courierObject = {
      customer_name: customerName,
      shipping_mode: shippingMode,
      shipping_code: shippingCode,
      cargo: {
        cargo_name: cargoName,
        cargo_type: cargoType,
        packaging: packaging,
        quantity: quantity,
        total_estimated_weight: totalWeight,
      },
      departure_location: {
        location: departureLocation.location,
        lat: departureLocation.lat,
        lng: departureLocation.lng,
      },
      delivery_location: {
        location: deliveryLocation.location,
        lat: deliveryLocation.lat,
        lng: deliveryLocation.lng,
      },
      current_location: {
        location: departureLocation.location,
        lat: departureLocation.lat,
        lng: departureLocation.lng,
      },
      pick_up_date: pickUpDate,
      insurance_required: insuranceRequired,
      additional_details: additionDetail,
      // ownerId: ownerId,
      shipping_status: shippingStatus,
    };
    
    firebase
      .addCourier(courierObject)
      .then((result) => {
        setMessage("A new courier was created successfully");
        setTimeout(() => {
          props.history.replace('/')
        }, 5000)
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <DefaultLayout>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="auto-container">
          <h2>Add New Courier</h2>
          <div className="separater"></div>
        </div>
      </section>

      <div className="breadcrumb-outer">
        <div className="auto-container">
          <ul className="bread-crumb text-center">
            <li>
              <Link to="/">Dashboard</Link> <span>/</span>
            </li>
            <li>Add courier</li>
          </ul>
        </div>
      </div>

      <section className="quote-section">
        <div className="auto-container">
          <div className="quote-form-box">
            {message && <div className="alert alert-success">{message}</div>}
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <h4>Shipping Mode</h4>
                  {shippingModes.map((shippingMode, index) => (
                    <div key={index} className="radio-box">
                      <input
                        type="radio"
                        name={"shipping_mode"}
                        id={shippingMode + "-shipping_mode"}
                        value={shippingMode}
                        onChange={(e) => setShippingMode(shippingMode)}
                      />
                      &nbsp;
                      <label htmlFor={shippingMode + "-shipping_mode"}>
                        {shippingMode}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="form-group option-box col-lg-6 col-md-6 col-sm-12">
                  <h4>Select Cargo Type</h4>
                  <select
                    className="ui-selectmenu-button ui-button"
                    onChange={(e) => setCargoType(e.target.value)}
                  >
                    {cargoTypes.map((cargoType, index) => (
                      <option key={index} value={cargoType}>
                        {cargoType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-5 col-md-6 col-sm-12">
                  <label>Cargo Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Cargo Name"
                    onChange={(e) => setCargoName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group col-lg-3 col-md-6 col-sm-12">
                  <label>Package Type</label>
                  <select
                    className="ui-selectmenu-button ui-button"
                    onChange={(e) => setPackaging(e.target.value)}
                    value={packaging}
                  >
                    <option>Select Packaging</option>
                    {packagings.map((p, index) => (
                      <option key={index} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group col-lg-2 col-md-4 col-sm-12">
                  <label>Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    className="ui-selectmenu-button ui-button"
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    required
                  />
                </div>

                <div className="form-group col-lg-2 col-md-2 col-sm-12">
                  <label>Weight</label>
                  <select
                    className="ui-selectmenu-button ui-button"
                    onChange={(e) => setTotalWeight(e.target.value)}
                  >
                    <option value="">Select Weight Range</option>
                    <option value="0KG - 10KG+">0KG - 10KG+</option>
                    <option value="11KG - 100KG+">11KG - 100KG+</option>
                    <option value="101KG - 1000KG+">101KG - 1000KG+</option>
                    <option value="More than 1000KG+">More than 1000KG+</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Transport From (Departure)</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Departure"
                    className="ui-selectmenu-button ui-button"
                    onChange={onChangeDeparture}
                    value={departureLocation.location}
                    required
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Latitude</label>
                  <input
                    type="number"
                    name="lat"
                    className="ui-selectmenu-button ui-button"
                    placeholder="Latitude"
                    onChange={onChangeDeparture}
                    value={departureLocation.lat}
                    required
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Longitude</label>
                  <input
                    type="number"
                    name="lng"
                    className="ui-selectmenu-button ui-button"
                    placeholder="Longitude"
                    onChange={onChangeDeparture}
                    value={departureLocation.lng}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Transport To</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Destination"
                    className="ui-selectmenu-button ui-button"
                    onChange={onChangeDelivery}
                    value={deliveryLocation.location}
                    required
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Latitude</label>
                  <input
                    type="number"
                    name="lat"
                    placeholder="Latitude"
                    className="ui-selectmenu-button ui-button"
                    onChange={onChangeDelivery}
                    value={deliveryLocation.lat}
                    required
                  />
                </div>

                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <label>Longitude</label>
                  <input
                    type="number"
                    name="lng"
                    placeholder="Longitude"
                    className="ui-selectmenu-button ui-button"
                    onChange={onChangeDelivery}
                    value={deliveryLocation.lng}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    name="customer_name"
                    placeholder="Enter Customer's name"
                    onChange={(e) => setCustomerName(e.target.value)}
                    value={customerName}
                    required
                  />
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="pickupdate">Pick up date</label>
                  <input
                    type="date"
                    name="pick_up_date"
                    id="pick_up_date"
                    className="ui-selectmenu-button ui-button"
                    onChange={(e) => setPickUpDate(e.target.value)}
                    value={pickUpDate}
                  />
                </div>
              </div>
              <div className="row">
                <label>
                  Additional Details{" "}
                  <span className="mute-text">(Optional)</span>
                </label>
                <textarea
                  onChange={(e) => setAdditionDetail(e.target.value)}
                  value={additionDetail}
                ></textarea>
              </div>
              <div className="row">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <input
                    type="checkbox"
                    id="insurance_required"
                    name="insurance_required"
                    onChange={(e) => setInsuranceRequired(e.target.value)}
                    checked={insuranceRequired}
                  />
                  <label htmlFor="insurance_required">
                    Goods to be shipped above are valid and insurred
                  </label>
                </div>
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <button type="submit" className="theme-btn btn-style-one">
                  Save
                </button>
              </div>
            </form>
              {message && <div className="alert alert-success">{message}</div>}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withRouter(AddCourier);
