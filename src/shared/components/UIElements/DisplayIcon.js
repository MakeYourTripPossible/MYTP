import React from "react";

const DisplayIcon = (props) => {
  return (
    <div className=" col-4 col-md-4 col-lg-4">
      <div className="trip-brief-time">
        <i className={props.icon} />
        <p className="trip-duration">{props.title}</p>
        <p className="trip-data">
          {props.Duration && (
            <>
              {props.night} Nights {props.day} Days
            </>
          )}
          {props.StartingPrice && <>{props.price}/-</>}
          {props.PickUp && (
            <>
              {props.start} to {props.end}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default DisplayIcon;
