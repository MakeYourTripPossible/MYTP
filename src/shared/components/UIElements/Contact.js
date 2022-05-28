import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { dataContext } from "./../../context/data-context";
import { RemoveDash, ToPricing } from "../../utils/HelperMethod";
import "./Contact.css";
const Contact = (props) => {
  let pathname = window.location.href.replace(
    "http://localhost:3000" || "https://makeyourtrippossible.com",
    ""
  );
  if (props.destination) {
    var trip = RemoveDash(props.destination);
  }
  const [data, setData] = useState({
    firstName: "",
    phone: "",
    email: "",
    destination: trip,
  });
  const { firstName, phone, email, destination } = data;

  const { cl_whatsapp, cl_call } = useContext(dataContext).contacts;
  const handleBooking = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/mytp/google_sheets/qgcJUNOfTDWzEnOT?tabId=tripBooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [firstName, phone, email, destination, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setData({
        ...data,
        firstName: "",
        phone: "",
        email: "",
        destination: "",
      });
    } catch (error) {
      notify(
        "Your Response has not been submitted. Please try again or contanct us on call !!"
      );
    }
  };
  const notify = (message) => toast.success(`${message}`);
  console.log();
  return (
    <div className="contact-box">
      {pathname !== undefined &&
        pathname !== "/book-now" &&
        !pathname.includes("/blogs/") && (
          <h3>
            <span>{ToPricing(props.price)}</span>/
            {props.price > 20000 && props.isCouple ? "couple" : "person"}
          </h3>
        )}
      {pathname !== undefined && !pathname.includes("/blogs/") && (
        <p>
          <sup>*</sup>GST @5% Extra
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Enter Name"
            value={firstName}
            onChange={handleBooking}
            required=""
          />
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Enter Mobile No."
            value={phone}
            onChange={handleBooking}
            required=""
          />
          <div className="form-group">
            <input
              type="eamil"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={handleBooking}
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Destination"
              className="form-control"
              placeholder="Enter Destination"
              value={destination}
              onChange={handleBooking}
              required=""
            />
          </div>

          <div className="btnwidth">
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#ef9632", color: "#fff" }}
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
      <div className="whatsapp-contact">
        <a
          href={`https://wa.me/${cl_whatsapp}?text=Hey! MakeYourTripPossible, I am interested in your ${trip} trips`}
          style={{ backgroundColor: "#3c6", color: "#fff" }}
          className="btn"
          target="_blank"
          type="button"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp" /> Whatsapp
        </a>
      </div>
      <div className="call-now-contact">
        <a href={`tel:${cl_call}`} className="btn btn-dark" rel="noreferrer">
          <i className="fa fa-phone"></i> Call Now
        </a>
      </div>
    </div>
  );
};

export default Contact;
