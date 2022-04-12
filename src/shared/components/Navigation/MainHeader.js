import React from "react";
import { WindowPosition } from "../../utils/HelperMethod";
import "./MainHeader.css";

const MainHeader = (props) => {
  const styles = { position: "fixed" };
  return (
    <header
      className="header bg-light"
      style={WindowPosition() > 100 ? styles : null}
    >
      {props.children}
    </header>
  );
};

export default MainHeader;
