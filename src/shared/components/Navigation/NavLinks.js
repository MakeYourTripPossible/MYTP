import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleActiveClass = (tab) => {
    return activeTab === tab ? "active" : "";
  };
  return (
    <>
      <div id="logo">
        <h1>
          <Link className="navbar-brand logo-name" to="/">
            <img
              id="loading"
              src={props.logo}
              alt="MakeYourTripPossible-logo"
              width="40px"
              height="auto"
            />
            <span className="logo-name">
              <span className="logo-color">Make</span>
              <span>Your</span>
              <span className="logo-color">Trip</span>
              <span>Possible</span>
            </span>
          </Link>
        </h1>
      </div>
      <label htmlFor="drop" className="toggle">
        <i className="far fa-tasks" />
      </label>
      <input type="checkbox" id="drop" />
      <ul className="menu mt-2 border-radius-class">
        <li
          className={handleActiveClass("home")}
          onClick={() => handleActiveTab("home")}
        >
          <Link to="/">
            <span className="fad fa-home" aria-hidden="true" />
            &nbsp;Home
          </Link>
        </li>
        <li
          className={handleActiveClass("international")}
          onClick={() => handleActiveTab("international")}
        >
          <Link to="/category/international-trip">
            <span className="fad fa-globe" aria-hidden="true" />
            &nbsp;International
          </Link>
        </li>
        <li
          className={handleActiveClass("blogs")}
          onClick={() => handleActiveTab("blogs")}
        >
          <Link to="/blogs">
            <span className="fad fa-blog" aria-hidden="true" />
            &nbsp;Blogs
          </Link>
        </li>
        <li
          className={handleActiveClass("customizetrip")}
          onClick={() => handleActiveTab("customizetrip")}
        >
          <Link to="/customize-trip">
            <span className="fad fa-pencil-ruler" aria-hidden="true" />
            &nbsp;Customize Trip
          </Link>
        </li>
        {/* <li className="dropdown">
          <label htmlFor="drop-2" className="toggle text-light">
            <span className="fad fa-map-marker-question" aria-hidden="true" />
            &nbsp;Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true" />
          </label>
          <Link to="/awated-trips">
            <span className="fad fa-map-marker-question" aria-hidden="true" />
            &nbsp;Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true" />
          </Link>
          <input type="checkbox" id="drop-2" />
          Awaited Trips lists
        </li> */}
      </ul>
    </>
  );
};

export default NavLinks;
