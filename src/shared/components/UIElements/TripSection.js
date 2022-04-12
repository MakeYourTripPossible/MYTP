import React from "react";
import CommonSection from "./CommonSection";
import "./TripSection.css";
const TripSection = (props) => {
  let { description, itinerary, inclusion, exclusion } = props.trip.details[0];
  let tripKey = Object.keys(props.trip.details[0]);
  return (
    <>
      <CommonSection SectionTrip id={tripKey[0]}>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </CommonSection>
      <CommonSection SectionTrip id={tripKey[1]}>
        <div className="wpb_wrapper">
          {itinerary.map((data, index) => (
            <span key={props.trip.to + "-para-" + index}>
              <p>
                <strong>
                  {data.day} : {data.title}
                </strong>
              </p>
              <ul className="trip-section-list">
                {data.brief.map((list, i) => (
                  <li
                    key={props.trip.to + "-list-" + i}
                    dangerouslySetInnerHTML={{ __html: list }}
                  />
                ))}
              </ul>
            </span>
          ))}
        </div>
      </CommonSection>
      <CommonSection SectionTrip id={tripKey[2]}>
        <ul className="trip-section-list">
          {inclusion.map((list, i) => (
            <li
              key={tripKey[2] + "-" + i}
              dangerouslySetInnerHTML={{ __html: list }}
            />
          ))}
        </ul>
      </CommonSection>
      <CommonSection SectionTrip id={tripKey[3]}>
        <ul className="trip-section-list">
          {exclusion.map((list, i) => (
            <li
              key={tripKey[2] + "-" + i}
              dangerouslySetInnerHTML={{ __html: list }}
            />
          ))}
        </ul>
      </CommonSection>
    </>
  );
};

export default TripSection;
