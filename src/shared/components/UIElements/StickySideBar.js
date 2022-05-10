import React from "react";
import "./StickySideBar.css";

const StickySideBar = (props) => {
  return (
    <div className="sticky-side-bar">
      <a
        href={`https://wa.me/${props.whatsapp}?text=Hey! MakeYourTripPossible, I have a Query`}
        className="whatsapp"
        target="_blank"
        type="button"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp" /> &nbsp;&nbsp; Ask Me
      </a>
    </div>
  );
};

export default StickySideBar;
