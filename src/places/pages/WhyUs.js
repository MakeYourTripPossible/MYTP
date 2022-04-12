import React from "react";
import ListPoints from "../components/ListPoints";
import whyus from "../../data/why-us.json";
const WhyUs = () => {
  return (
    <section className="about" id="Why-us">
      <div className="container">
        <div className="inner-sec-w3pvt">
          <h3 className="tittle text-center heading-bottom-line ">Why Us</h3>
          <div className="feature-grids row text-center">
            <ListPoints data={whyus} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
