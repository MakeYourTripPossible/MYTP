import React from "react";

const CommonSection = (props) => {
  if (props.SectionTrip) {
    return (
      <section id={props.id}>
        <div className="container px-1">
          <div className="tabContents">
            <h3>
              <i className="fad fa-file-alt" /> {props.id}
            </h3>
            <p />
            {props.children}
            <p />
          </div>
        </div>
      </section>
    );
  }
  if (!props.SectionTrip) {
    return (
      <section className="about" id="Why-us">
        <div className="container">
          <div className="inner-sec-w3pvt">
            <h3 className="tittle text-center heading-bottom-line ">
              {props.heading}
            </h3>
            {props.children}
          </div>
        </div>
      </section>
    );
  }
};

export default CommonSection;
