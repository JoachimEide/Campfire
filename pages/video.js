import React, { useState } from "react";
import ReactPlayer from "react-player";
import { friendsData } from "../data/friends";
import VideoTopIcon from "../components/video/video-top-icon";
import Chat from "../components/video/chat";
import VideoChat from "../components/video/videochat";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
    },
  };
};

export default function VideoPlayer(props) {
  const [iconClick, setIconClick] = useState(false);
  const [videoChatClick, setVideoChatClick] = useState(false);
  return (
    <div>
      <VideoTopIcon
        status={props.socialStatus}
        event={setIconClick}
        target={iconClick}
        friends={props.friendsDataList}
        yourFriends={props.yourFriends}
      />
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
      <Chat
        iconClick={iconClick}
        event={setIconClick}
        videoChatClick={videoChatClick}
        videoEvent={setVideoChatClick}
      />
      {videoChatClick ? (
        <VideoChat
          videoChatClick={videoChatClick}
          videoEvent={setVideoChatClick}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
