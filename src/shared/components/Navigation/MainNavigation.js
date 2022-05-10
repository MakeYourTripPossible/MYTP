import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const MainNavigation = (props) => {
  return (
    <>
      <MainHeader>
        <SocialLinks />
        <div className="container-fluid p-0">
          <nav className="pt-1">
            <NavLinks {...props} />
          </nav>
        </div>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
