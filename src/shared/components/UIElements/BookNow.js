import React, { useState } from "react";
import { toast } from "react-toastify";
import { Capitalization } from "../../utils/HelperMethod";
import "./BookNow.css";
const BookNow = (props) => {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    traveller: "",
    destination: "",
    ourService: props.serviceCategory,
  });
  const { fname, phone, email, traveller, destination, ourService } = data;

  const handleBookNow = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/mytp/google_sheets/qgcJUNOfTDWzEnOT?tabId=${props.sheet}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              fname,
              phone,
              email,
              traveller,
              destination,
              ourService,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setData({
        ...data,
        fname: "",
        phone: "",
        email: "",
        traveller: "",
        destination: "",
        ourService: "",
      });
    } catch (error) {
      notify(
        "Your Response has not been submitted. Please try again or contanct us on call !!"
      );
    }
  };
  const notify = (message) => toast.success(`${message}`);
  return (
    <div className="container book-now-box book-now-background">
      <h3 className="tittle text-center heading-bottom-line pt-4">
        {Capitalization(props.sheet.split("-").join(" "))}
      </h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-3 m-auto text-center">
                <label htmlFor="fname">
                  <b>Name:</b>
                </label>
              </div>
              <div className="col-9">
                <div className="form-group">
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    placeholder="Enter Name"
                    value={fname}
                    onChange={handleBookNow}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 m-auto text-center">
                <label htmlFor="phone">
                  <b>Phone:</b>
                </label>
              </div>
              <div className="col-9">
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone number"
                    value={phone}
                    onChange={handleBookNow}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 m-auto text-center">
                <label htmlFor="phone">
                  <b>Email:</b>
                </label>
              </div>
              <div className="col-9">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleBookNow}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 m-auto text-center">
                <label htmlFor="traveller">
                  <b>Traveller:</b>
                </label>
              </div>
              <div className="col-9">
                <div className="form-group">
                  <input
                    type="number"
                    name="traveller"
                    className="form-control"
                    placeholder="Enter number of Traveller"
                    value={traveller}
                    onChange={handleBookNow}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 m-auto text-center">
                <label htmlFor="destination">
                  <b>Destination:</b>
                </label>
              </div>
              <div className="col-9">
                <div className="form-group">
                  <input
                    type="text"
                    name="destination"
                    className="form-control"
                    placeholder="Enter your Destination"
                    value={destination}
                    onChange={handleBookNow}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col text-center">
                <button className="btn btn-primary px-4" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <img
            src="/img/MakeYourTripPossible_book_now.jpg"
            alt=""
            width="80%"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
