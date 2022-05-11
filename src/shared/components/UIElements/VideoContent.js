import React from "react";

const VideoContent = (props) => {
  return (
    <div className={props.className}>
      <h3 className="mb-3">
        <span>{props.title}</span>
      </h3>
      <iframe
        width="100%"
        height="315px"
        title="MakeYourTripPossible"
        src={`https://www.youtube-nocookie.com/embed/${props.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoContent;
