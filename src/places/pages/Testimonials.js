import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonials.css";
import { Capitalization } from "./../../shared/utils/HelperMethod";
const Testimonials = (props) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {props.data.map((review, i) => (
        <div key={"testimonial-" + i} className="container">
          <img src={review.img} alt="MakeYourTripPossible-img" />
          <div className="myCarousel">
            <h3>{Capitalization(review.name)}</h3>
            <h4>⭐⭐⭐⭐⭐</h4>
            <p dangerouslySetInnerHTML={{ __html: review.para }} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
