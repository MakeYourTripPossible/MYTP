import React, { useContext } from "react";
import { dataContext } from "./../../context/data-context";
const SocialLinks = (props) => {
  const { contacts } = useContext(dataContext);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="top-right-info">
            <li className="mr-1">
              <a href={`tel:${contacts.cl_call}`} className="text-dark">
                <i className="fad fa-phone-plus top-nav-icon"></i>&nbsp;
                {contacts.cl_call}
              </a>
            </li>
            <li className="mobile-view">
              <a href={`mailto:${contacts.cl_email}`} className="text-dark">
                <i className="fad fa-envelope top-nav-icon"></i>&nbsp;
                {contacts.cl_email}
              </a>
            </li>
          </ul>
          <div className="d-flex mobile-nav-social">
            <ul className="top-right-info d-inline">
              {contacts.cl_facebook !== "/" && (
                <li className="mr-1">
                  <a
                    href={contacts.cl_facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-facebook-f" />
                  </a>
                </li>
              )}
              {contacts.cl_twitter !== "/" && (
                <li>
                  <a
                    href={contacts.cl_twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-twitter" />
                  </a>
                </li>
              )}
              {contacts.cl_linkedin !== "/" && (
                <li className="mx-1">
                  <a
                    href={contacts.cl_linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-linkedin-in" />
                  </a>
                </li>
              )}
              {contacts.cl_instagram !== "/" && (
                <li>
                  <a
                    href={contacts.cl_instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              )}
              {contacts.cl_youtube !== "/" && (
                <li>
                  <a
                    href={contacts.cl_youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SocialLinks;
