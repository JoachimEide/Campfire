import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoTopIcon from "../components/video/video-top-icon";

export default function VideoPlayer() {
  const [iconClick, setIconClick] = useState(false);
  return (
    <div>
      <VideoTopIcon event={setIconClick} target={iconClick} />
      <div
        className="player-wrapper"
        style={iconClick ? { width: "85%" } : { width: "100%" }}
      >
        <ReactPlayer
          playing
          controls
          className="react-player"
          url="https://vimeo.com/372838917"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
