import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  let notFoundImgUrl = "/img/MakeYourTripPossible_not_found_banner.png";
  let notFoundImgUrlWeb = "/img/MakeYourTripPossible_not_found_banner.webp";
  return (
    <>
      <div className="container notFound-space">
        <div className="container return-home-btn">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "rgb(239, 150, 50)",
              color: "rgb(255, 255, 255)",
            }}
          >
            <Link
              to="/"
              style={{
                color: "rgb(255, 255, 255)",
              }}
            >
              {" "}
              Return Home
            </Link>
          </button>
        </div>
        <picture>
          <source srcset={notFoundImgUrlWeb} type="image/webp" />
          <source srcset={notFoundImgUrl} type="image/png" />
          <img src={notFoundImgUrl} alt="Not Found" />
        </picture>
      </div>
    </>
  );
};

export default NotFound;
