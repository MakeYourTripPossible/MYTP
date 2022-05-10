import React from "react";
import { Link } from "react-router-dom";
import { AtTheTop, ToLink } from "../../shared/utils/HelperMethod";

const PlaceBlog = (props) => {
  return (
    <>
      <div className="row mt-5">
        {props.data.map((blog, i) => (
          <div key={("travel-blog", i)} className="col-lg-6">
            <Link
              to={"/blogs/" + ToLink(blog.title)}
              onClick={() => {
                AtTheTop();
              }}
            >
              <div className="blog-item">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={blog.img}
                      alt={blog.alt}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3>{blog.title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: blog.description.substring(0, 150) + "...",
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="col-3 m-auto">
          <div className="btnwidth">
            <Link
              to="/blogs"
              className="btn"
              style={{
                backgroundColor: "rgb(239, 150, 50)",
                color: "rgb(255, 255, 255)",
              }}
              onClick={() => {
                AtTheTop();
              }}
            >
              {" "}
              view more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceBlog;
