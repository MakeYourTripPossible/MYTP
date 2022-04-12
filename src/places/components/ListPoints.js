import React from "react";

const ListPoints = (props) => {
  return (
    <>
      {props.data.map((point, i) => (
        <div key={"ListPoint-" + i} className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd px-3">
            <span className={"fad fa-" + point.icon} aria-hidden="true"></span>
            <h3 className="my-4">{point.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: point.para }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPoints;
