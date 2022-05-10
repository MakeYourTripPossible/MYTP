import React, { useEffect, useState } from "react";
import "./TitleBanner.css";

const TitleBanner = (props) => {
  const [isTripShow, setIsTripShow] = useState(false);
  useEffect(() => {
    let { pathname } = props.location;
    setIsTripShow(pathname.includes("/trip/"));
  }, [props.location]);

  const Style = props.DetailTrip
    ? {
        textAlign: "left",
        paddingLeft: "46px",
        paddingTop: "197px",
        position: "absolute",
      }
    : {};
  return (
    <div className="innerBannerImg">
      <h2 style={isTripShow ? Style : null}>{props.title}</h2>
      {props.DetailTrip && isTripShow && (
        <div className="Gitbtn">
          <a href="/inquiry-page">
            <button className="btn ccGegr">Trip Itineray</button>
          </a>
          <a href="/book-now">
            <button className="btn ccGegr">Book Now</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default TitleBanner;
