import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MainBanner from "../../shared/components/Banner/Mainbanner";
import Contact from "../../shared/components/UIElements/Contact";
import { dataContext } from "../../shared/context/data-context";
import { Capitalization, RemoveDash } from "../../shared/utils/HelperMethod";
import "./Blog.css";

const Blog = (props) => {
  const { blogTitle } = useParams();
  const { allBlogs } = useContext(dataContext);
  let blogName = Capitalization(RemoveDash(blogTitle));
  let blog = allBlogs.filter((d) => d.title === blogName)[0];

  return (
    <>
      <MainBanner
        DetailTrip
        {...props}
        url={blog.img}
        title={Capitalization(blog.title)}
      />
      <div className="container blog-page">
        <div className="row">
          <div className="col-12 col-sm-9 col-md-7">
            <article className="blog-article">
              {/* <h1>{Capitalization(RemoveDash(blogTitle))} Blog</h1> */}
              <div className="blog-content">
                <p dangerouslySetInnerHTML={{ __html: blog.description }} />
              </div>
            </article>
          </div>
          <div className="col-12 col-sm-3 col-md-5">
            <Contact {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
