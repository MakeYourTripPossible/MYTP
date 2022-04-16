import React, { useContext, useEffect, useState } from "react";
import "./SearchBanner.css";
import { dataContext } from "./../../context/data-context";
import { Link } from "react-router-dom";
import { Capitalization } from "./../../utils/HelperMethod";
const SearchBanner = (props) => {
  const { allPlaces: searchData } = useContext(dataContext);
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(
      search === ""
        ? []
        : searchData.filter((x) =>
            x.heading.toLowerCase().includes(search.toLowerCase())
          )
    );
  }, [search, searchData]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleCancleSearch = (e) => {
    setSearch("");
  };
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row banner-grids">
            <div className="col-lg-12 mt-5 banner-info-w3ls">
              <div className="container search-box">
                <i className="fad fa-search"></i>
                <input
                  className="form-control mb-3 input-search-class"
                  type="text"
                  placeholder="Click karo Trip karo..."
                  value={search}
                  onChange={handleSearch}
                />
                <i className="fad fa-times" onClick={handleCancleSearch}></i>
                {/* <div className="container search-data-box"> */}
                {search.length > 0 &&
                  allData.map((data, i) => (
                    <div
                      key={"search-" + i}
                      className="container search-data-box"
                    >
                      <Link to={"/trip/" + data.to}>
                        <li>
                          {data.heading + " " + Capitalization(data.label)}
                        </li>
                      </Link>
                    </div>
                  ))}
                {allData.length === 0 && search.length > 0 && (
                  <div className="container search-data-box">
                    <li>No Result</li>
                  </div>
                )}
                {/* </div> */}
              </div>
              {/* <button className="awaited-trips">Awaited Trips</button> */}
              <div className="container text-center mytp-rating">
                <img src="/img/MakeYourTripPossible_google_rating.png" alt="" />
              </div>
            </div>
            {/* <div className="col-lg-12 mt-5 banner-info-w3ls">
              <h2 style={{ fontSize: "2em", marginTop: "3em" }}>
                Click Karo Trip Karo
              </h2>
              <h3 className="mb-3">
                Plan Your Holiday Trip Now Exceptional Adventure
              </h3>
              <p className="mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis.
              </p>
              <a href="/#tours-details" className="btn">
                Explore Now
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="container mt-3 text-center">
          <iframe
            width="200px"
            height="300px"
            src="https://www.youtube.com/embed/v9bbNq8mNgc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
      </section>
    </>
  );
};

export default SearchBanner;
