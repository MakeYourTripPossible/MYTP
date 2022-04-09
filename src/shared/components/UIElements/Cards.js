import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = (props) => {
  if (props.PriceCatagory) {
    return (
      <div className="container mt-5 heading-style">
        <h2 className="text-center">{props.PackageGroup}</h2>
        <div className="container-fluid my-5">
          <div className="row">
            {props.cards.map((card) => (
              <div key={card.id + "-price"} className="col">
                <Link to={card.to}>
                  <div className="img-card">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="img-card-item img-card-item-hover"
                    />
                    <h4 className="card-label">
                      <span>{card.label} </span>
                    </h4>
                    <div className="caption">
                      <p className="caption-text">
                        <i className="fas fa-rupee-sign" /> Starting @ INR{" "}
                        {card.price}
                        /-
                      </p>
                      <div style={{ clear: "both" }}></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (props.DetailCatagory) {
    return (
      <div className="container mt-5 heading-style">
        <h2 className="text-center">{props.PackageGroup}</h2>
        <div className="container my-5">
          <div className="row">
            {props.cards.map((card) => (
              <div
                key={card.id + "-detail"}
                className="col-lg-4 col-md-6 col-sm-12 px-3"
              >
                <div className="img-detail-card">
                  <Link to={"/trip/" + card.to}>
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="img-card-item"
                    />
                    <div className="caption">
                      <p className="caption-text-left">
                        <i className="fas fa-rupee-sign" /> {card.price}
                      </p>
                      <p className="caption-text-right">
                        <i className="fas fa-sun" /> {card.day} Days &nbsp;
                        <i className="fas fa-moon" /> {card.night} Night
                      </p>
                      <div style={{ clear: "both" }}></div>
                    </div>
                  </Link>
                </div>
                <div className="card-detail-box">
                  <p className="card-date">
                    {/* <i className="fad fa-calendar-alt" /> &nbsp; */}
                    {/* {card.dates}s */}
                  </p>
                  <p className="card-heading">
                    <i className="fad fa-map-marker-alt" /> &nbsp;{" "}
                    {card.heading}
                  </p>
                  <p className="card-rupee">
                    <span>Start at</span> &nbsp;
                    <i className="fad fa-rupee-sign" /> {card.price}/-
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
