import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../../shared/context/data-context";
import MainBanner from "../../shared/components/Banner/Mainbanner";
import Cards from "../../shared/components/UIElements/Cards";
import TripSection from "../../shared/components/UIElements/TripSection";
import Contact from "../../shared/components/UIElements/Contact";
import Testimonials from "./Testimonials";
import ListPoints from "../components/ListPoints";
import TripIcon from "../components/TripIcon";
import CommonSection from "../../shared/components/UIElements/CommonSection";
import { Capitalization, RemoveDash } from "../../shared/utils/HelperMethod";
import Blogs from "./../../shared/components/UIElements/Blogs";
import blogs from "../../data/latest-blogs.json";
import testimonial from "../../data/testimonial.json";
import whyus from "../../data/why-us.json";
import "./Places.css";
import VideoContent from "../../shared/components/UIElements/VideoContent";
import PlaceBlog from "./PlaceBlog";
const Places = (props) => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 1000);
  }, []);
  const { pathname } = props.location;
  let { tripTitle, categoryTitle } = useParams();
  const { allPlaces, allService } = useContext(dataContext);
  let bgUrl =
    categoryTitle === undefined
      ? pathname === "/blogs"
        ? "/img/MakeYourTripPossible_blogs.webp"
        : "/img/MakeYourTripPossible_Mainbanner.webp"
      : allPlaces.filter((data) => data.toCategory === categoryTitle)[0]
          .categoryBannerImgWeb;
  let defaultValue = {
    bannerUrl: bgUrl,
    to: "/",
    heading: pathname === "/blogs" ? "Blogs" : "",
  };
  let data =
    tripTitle === undefined
      ? defaultValue
      : allPlaces.filter((place) => place.to === tripTitle)[0];
  let categoryTrpTitle =
    categoryTitle !== undefined
      ? Capitalization(RemoveDash(categoryTitle))
      : "Popular Trips";
  let isCouple =
    data.categoryImg !== undefined &&
    data.id !== 78 &&
    (data.categoryImg.includes("honeymoon_category") ||
      data.categoryImg.includes("international_category"));

  return (
    <>
      <MainBanner
        DetailTrip
        {...props}
        url={data.bannerUrl}
        load={load}
        title={categoryTitle === undefined ? data.heading : categoryTrpTitle}
      />
      {tripTitle === undefined &&
        (categoryTitle === undefined || pathname === "/") &&
        pathname !== "/blogs" && (
          <CommonSection heading="Category">
            <Cards
              TagCatagory
              AtPrice
              linkPath={"category"}
              // PackageGroup={"Category"}
              cards={allPlaces.filter((card) => card.topCategoryTrip)}
              load={load}
            />
          </CommonSection>
        )}
      {tripTitle === undefined &&
        (categoryTitle !== undefined || pathname === "/") && (
          <CommonSection heading={categoryTrpTitle}>
            <Cards
              DetailCatagory
              AtPrice
              // PackageGroup={categoryTrpTitle}
              cards={allPlaces.filter((card) =>
                categoryTitle !== undefined
                  ? card.toCategory === categoryTitle
                  : card.popularTrip
              )}
              load={load}
            />
          </CommonSection>
        )}
      {tripTitle !== undefined && pathname !== "/" && (
        <div className="weekend-details">
          <div className="container trip-content">
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-9">
                <TripIcon trip={data} />
                <TripSection title="Description" trip={data} />
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <Contact
                  {...props}
                  isCouple={isCouple}
                  price={data.price}
                  destination={data.to}
                />
                <VideoContent
                  title="Our Reviews"
                  className="contact-box"
                  id={"gyFvRPh64Y8"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {pathname === "/" && (
        <CommonSection heading="Why Us">
          <p className="intro-para">
            Have you gotten tired of your normal daily routine? And want to
            refresh your mind and soul? So, We are here to help you, to make
            your plan a reality. We offer you the most affordable package for
            your dream destination.
          </p>
          <div className="feature-grids row text-center">
            <ListPoints data={whyus} />
          </div>
        </CommonSection>
      )}
      {pathname === "/" && (
        <CommonSection heading="Testimonials">
          <Testimonials data={testimonial} />
        </CommonSection>
      )}
      {pathname === "/" && (
        <CommonSection heading="Blogs">
          <PlaceBlog data={blogs.filter((b) => b.isHomeBlog)} />
        </CommonSection>
      )}
      {pathname === "/blogs" && <Blogs data={blogs} />}
      {tripTitle === undefined &&
        (categoryTitle === undefined || pathname === "/") &&
        pathname !== "/blogs" && (
          <CommonSection heading="Our Services">
            <Cards TagCatagory linkPath={"/book-now/"} cards={allService} />
          </CommonSection>
        )}
    </>
  );
};

export default Places;
