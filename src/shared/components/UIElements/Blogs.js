import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import { AtTheTop, ToLink } from "./../../utils/HelperMethod";
const Blogs = (props) => {
  return (
    <>
      <section syle={{ padding: "40px 0 20px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {props.data.map((blog, i) => (
                  <div key={("travel-blog", i)} className="col-lg-12">
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
                                __html:
                                  blog.description.substring(0, 150) + "...",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="recent-blogs">
                <h3 className="recent-blogs-title">Recent Blogs</h3>
                {props.data
                  .filter((e) => e.isPopular)
                  .map((blog) => (
                    <div key={blog.id} className="post-item">
                      <div className="blog-post">
                        <img
                          className="img-fluid"
                          src={blog.img}
                          alt={blog.alt}
                        />
                      </div>
                      <a href={blog.links}>
                        <h6>{blog.title}</h6>
                      </a>
                      <p className="blog-post-date">{blog.postDate}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: blog.description.substring(0, 59) + "...",
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
