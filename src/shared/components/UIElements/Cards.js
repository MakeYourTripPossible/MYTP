import React from "react";
import { Link } from "react-router-dom";
import {
  AtTheTop,
  Capitalization,
  RemoveDash,
  ToPricing,
} from "../../utils/HelperMethod";
import "./Cards.css";
import Loading from "./Loading";
const Cards = (props) => {
  if (props.TagCatagory) {
    return (
      // <div className="container mt-5 heading-style">
      //   <h2 className="text-center heading-bottom-line">
      //     {props.PackageGroup}
      //   </h2>
      <div className="container-fluid my-5">
        <div className="row">
          {props.cards.map((card) => (
            <>
              <div
                key={card.id + "-price"}
                className={`col-sm-12 col-md-6 col-lg-${
                  props.linkPath !== "category" ? 4 : 3
                } my-3`}
              >
                <Link
                  to={
                    props.linkPath !== "category"
                      ? props.linkPath + card.label
                      : "/category/" + card.toCategory
                  }
                  onClick={() => AtTheTop()}
                >
                  <div className="img-card">
                    {props.load ? (
                      <Loading />
                    ) : (
                      <>
                        <picture>
                          {card.categoryImgWeb !== undefined && (
                            <source
                              srcSet={`${card.categoryImgWeb}`}
                              type="image/webp"
                            />
                          )}
                          {card.categoryImg.includes(".jpg") ? (
                            <source
                              srcSet={`${card.categoryImg}`}
                              type="image/png"
                            />
                          ) : (
                            <source
                              srcSet={`${card.categoryImg}`}
                              type="image/jpeg"
                            />
                          )}
                          <img
                            src={card.categoryImg}
                            alt={card.heading}
                            className="img-card-item img-card-item-hover"
                          />
                        </picture>
                      </>
                    )}
                    <h4 className="card-label">
                      <span>{Capitalization(RemoveDash(card.label))} </span>
                    </h4>
                    <div className="caption">
                      {props.AtPrice && (
                        <p className="caption-text">
                          <i className="fas fa-rupee-sign" /> Starting @ INR{" "}
                          {ToPricing(card.price)}
                          /-
                        </p>
                      )}
                      {!props.AtPrice && (
                        <p className="caption-text">
                          <q
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                            }}
                          >
                            {card.tagLine}
                          </q>
                        </p>
                      )}
                      <div style={{ clear: "both" }}></div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
      // </div>
    );
  }

  if (props.DetailCatagory) {
    return (
      // <div className="container mt-5 heading-style">
      //   <h2 className="text-center heading-bottom-line">
      //     {props.PackageGroup}
      //   </h2>
      <div className="container my-5">
        <div className="row">
          {props.cards.map((card) => (
            <div
              key={card.id + "-detail"}
              className="col-lg-4 col-md-6 col-sm-12 px-3"
            >
              <div className="img-detail-card">
                <Link to={"/trip/" + card.to} onClick={() => AtTheTop()}>
                  {props.load ? (
                    <Loading />
                  ) : (
                    <>
                      <picture>
                        <source srcSet={`${card.imgWeb}`} type="image/webp" />
                        <source srcSet={`${card.img}`} type="image/png" />
                        <img
                          src={`${card.img}`}
                          alt={card.heading}
                          className="img-card-item"
                          type="image/png"
                        />
                      </picture>
                    </>
                  )}
                  <div className="caption">
                    <p className="caption-text-left">
                      <i className="fas fa-rupee-sign" />{" "}
                      {ToPricing(card.price)}
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
                  <i className="fad fa-map-marker-alt" /> &nbsp; {card.heading}
                </p>
                <p className="card-rupee">
                  <span>Start at</span> &nbsp;
                  <i className="fad fa-rupee-sign" /> {ToPricing(card.price)}
                  /-
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      // </div>
    );
  }
};

export default Cards;
