import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../shared/context/data-context";
import MainBanner from "../../shared/components/Banner/Mainbanner";
import Cards from "../../shared/components/UIElements/Cards";
import TripSection from "../../shared/components/UIElements/TripSection";
import Contact from "../../shared/components/UIElements/Contact";
import Testimonials from "./Testimonials";
import ListPoints from "../components/ListPoints";
import TripIcon from "../components/TripIcon";
import testimonial from "../../data/testimonial.json";
import whyus from "../../data/why-us.json";
import "./HomePage.css";
import CommonSection from "../../shared/components/UIElements/CommonSection";
const HomePage = (props) => {
  let { tripTitle } = useParams();
  const { allPlaces } = useContext(dataContext);
  let data =
    tripTitle === undefined
      ? {
          bannerUrl: "/img/MakeYourTripPossible_Mainbanner.jpg",
          to: "/",
          heading: "",
        }
      : allPlaces.filter((place) => place.to === tripTitle)[0];

  return (
    <>
      <MainBanner
        DetailTrip
        {...props}
        url={data.bannerUrl}
        title={data.heading}
      />
      {tripTitle === undefined && (
        <Cards
          DetailCatagory
          PackageGroup={"Popular Trips"}
          cards={allPlaces.filter((card) => card.topWeekendTrip)}
        />
      )}
      {tripTitle !== undefined && (
        <div className="weekend-details">
          <div className="container trip-content">
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-9">
                <TripIcon trip={data} />
                <TripSection title="Description" trip={data} />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <Contact price={data.price} destination={data.to} />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.location.pathname === "/" && (
        <CommonSection heading="Why Us">
          <div className="feature-grids row text-center">
            <ListPoints data={whyus} />
          </div>
        </CommonSection>
      )}
      {props.location.pathname === "/" && (
        <CommonSection heading="Testimonials">
          <Testimonials data={testimonial} />
        </CommonSection>
      )}
    </>
  );
};

export default HomePage;
