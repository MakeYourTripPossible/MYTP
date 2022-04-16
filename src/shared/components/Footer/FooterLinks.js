import React, { useContext } from "react";
import important_links from "../../../data/important-links.json";
import Trip_Widget from "../../../data/trip-widget.json";
import latest_blogs from "../../../data/latest-blogs.json";
import { dataContext } from "../../context/data-context";
import { Link } from "react-router-dom";
import { AtTheTop } from "../../utils/HelperMethod";
const FooterLinks = (props) => {
  const { allPlaces, contacts } = useContext(dataContext);
  if (props.ImpLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_links">
          {important_links.map((imp) => (
            <li key={imp.id}>
              <a href={imp.link}>
                <i className="fad fa-angle-right" aria-hidden="true"></i>
                {imp.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.TripWidget) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <ul className=" kilimanjaro_widget">
          {Trip_Widget.map((tag) => (
            <li key={tag.id}>
              <a href={tag.links}>{tag.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.LatestBlogs) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        {latest_blogs
          .filter((e) => e.isPopular)
          .map((blog) => (
            <div key={blog.id} className="kilimanjaro_blog_area">
              <div className="kilimanjaro_thumb">
                <img className="img-fluid" src={blog.img} alt={blog.alt} />
              </div>
              <a href={blog.links}>{blog.title}</a>
              <p className="kilimanjaro_date">{blog.postDate}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.description.substring(0, 59) + "...",
                }}
              />
            </div>
          ))}
      </div>
    );
  }

  if (props.SocialLinks) {
    return (
      <div className="kilimanjaro_part m-top-15">
        <h5>{props.Title}</h5>
        <ul className="kilimanjaro_social_links">
          {contacts.cl_facebook !== "/" && (
            <li>
              <a href={contacts.cl_facebook}>
                <i className="fab fa-facebook" aria-hidden="true"></i> Facebook
              </a>
            </li>
          )}
          {contacts.cl_twitter !== "/" && (
            <li>
              <a href={contacts.cl_twitter}>
                <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
              </a>
            </li>
          )}
          {contacts.cl_youtube !== "/" && (
            <li>
              <a href={contacts.cl_youtube}>
                <i className="fab fa-youtube" aria-hidden="true"></i> YouTube
              </a>
            </li>
          )}
          {contacts.cl_linkedin !== "/" && (
            <li>
              <a href={contacts.cl_linkedin}>
                <i className="fab fa-linkedin" aria-hidden="true"></i> Linkedin
              </a>
            </li>
          )}
          {contacts.cl_instagram !== "/" && (
            <li>
              <a href={contacts.cl_instagram}>
                <i className="fab fa-instagram" aria-hidden="true"></i>{" "}
                Instagram
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  if (props.AboutUs) {
    return (
      <div className="kilimanjaro_part">
        <h5>About Us</h5>
        <p>
          <b>Makeyourtrippossible</b> is a Delhi-based traveling company. We are
          a team of experienced and passionate travelers. Our budget trip
          package is pocket-friendly and services all over India, with
          first-class lodging and convenience. <br /> <br />
          Explore various Holiday packages and blogs of your dream destination
          on our website. We always love providing appropriate information and
          the value of our client's time.
        </p>
      </div>
    );
  }

  if (props.ContactLinks) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <div className="kilimanjaro_single_contact_info">
          <h5>Phone:</h5>
          <ul className="top-right-info">
            <li className="my-1 pb-2">
              <a href={`tell:${contacts.cl_call}`} className="text-white">
                <i className="fad fa-phone-plus top-nav-icon"></i>
                &nbsp;{contacts.cl_call}&nbsp;
              </a>
            </li>
            <br />
            <li className="pb-2 mobile-view">
              <a
                href={`https://wa.me/${contacts.cl_whatsapp}?text=Hey! MakeYourTripPossible, I am interested in your trips`}
                className="text-white"
              >
                <i className="fab fa-whatsapp top-nav-icon"></i>
                &nbsp;{contacts.cl_whatsapp}
              </a>
            </li>
          </ul>
        </div>
        <div className="kilimanjaro_single_contact_info mt-5">
          <h5>Email:</h5>
          <ul className="top-right-info">
            <li className="pb-2">
              <a href={`mailto:${contacts.cl_email}`} className="text-white">
                <i className="fad fa-envelope top-nav-icon"></i>
                &nbsp;{contacts.cl_email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (props.LatestTrips) {
    return (
      <div className="kilimanjaro_part">
        <h5>{props.Title}</h5>
        <div className="kilimanjaro_works">
          {allPlaces
            .filter((place) => place.popularTrip)
            .map((place, i) => (
              <span key={"latest-trip" + i} className="kilimanjaro_works_img">
                <Link to={"/trip/" + place.to} onClick={() => AtTheTop()}>
                  <img src={place.img} alt="" />
                </Link>
              </span>
            ))}
        </div>
      </div>
    );
  }
  return null;
};

export default FooterLinks;
