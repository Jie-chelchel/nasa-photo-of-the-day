import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer(props) {
  const { isLoading } = props;
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <h4>{props.date}</h4>
      <ReactPlayer url={props.url} />
    </div>
  );
}

export default VideoPlayer;
