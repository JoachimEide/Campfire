import React from "react";
import ReactPlayer from "react-player/youtube";

export default function VideoPlayer() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        playing
        className="react-player"
        url="mov_eks.mp4"
        width="100%"
        height="100%"
      />
    </div>
  );
}
