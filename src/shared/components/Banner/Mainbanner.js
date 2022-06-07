import React from "react";
import SearchBanner from "./SearchBanner";
import TitleBanner from "./TitleBanner";
import Loading from "./../UIElements/Loading";

const MainBanner = (props) => {
  let bgcStyle = {
    backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.1) 30% ), url('${props.url}')`,
    zIndex: 1,
    width: "100%",
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  let bgcStyleLoading = {
    backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.1) 30% )`,
    zIndex: 1,
    width: "100%",
    margin: "auto",
    height: "60vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return props.load ? (
    <div className="container-fluid" style={bgcStyleLoading}>
      <Loading />
    </div>
  ) : (
    <header
      className={
        props.location.pathname === "/" ? "main-content" : "main-content inner"
      }
      id="home"
      style={bgcStyle}
    >
      {props.location.pathname === "/" ? (
        <SearchBanner />
      ) : (
        <TitleBanner {...props} title={props.title} />
      )}
    </header>
  );
};

export default MainBanner;
