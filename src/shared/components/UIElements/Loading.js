import React from "react";
import ReactLoading from "react-loading";
const Loading = (props) => {
  return (
    <ReactLoading
      type="spinningBubbles"
      color="#ef9632"
      height={246}
      width={240}
      className="m-auto"
    />
  );
};

export default Loading;
