import React, { useState, useEffect } from "react";
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
  const [ChatActive, setChatActive] = useState(false);
  const [inactiveMouse, setInactiveMouse] = useState(false);

  let timer = null;

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (timer) {
      clearTimeout(timer);
      setInactiveMouse(false);
    }
    timer = setTimeout(() => {
      setInactiveMouse(true);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <VideoTopIcon
        inactiveMouse={inactiveMouse}
        status={props.socialStatus}
        event={setIconClick}
        chatEvent={setChatActive}
        target={iconClick}
        friends={props.friendsDataList}
        yourFriends={props.yourFriends}
      />
      <div
        className="player-wrapper"
        style={
          iconClick || videoChatClick ? { width: "80%" } : { width: "100%" }
        }
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
      {ChatActive ? (
        <Chat
          inactiveMouse={inactiveMouse}
          iconClick={iconClick}
          event={setIconClick}
          videoChatClick={videoChatClick}
          videoEvent={setVideoChatClick}
        />
      ) : (
        <></>
      )}
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
