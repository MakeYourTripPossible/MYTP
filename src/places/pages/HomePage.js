import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../shared/context/data-context";
import MainBanner from "../../shared/components/Banner/Mainbanner";
import Cards from "../../shared/components/UIElements/Cards";
import "./HomePage.css";
import TripIcon from "../components/TripIcon";
import TripSection from "../../shared/components/UIElements/TripSection";
import Contact from "../../shared/components/UIElements/Contact";
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

  let bgcStyle = {
    backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.7) 15%, rgba(0, 0, 0, 0.5) 30% ), url('${data.bannerUrl}')`,
    zIndex: 1,
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <MainBanner
        DetailTrip
        path={data.to.toLowerCase()}
        title={data.heading}
        style={bgcStyle}
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
    </>
  );
};

export default HomePage;
