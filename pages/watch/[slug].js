import { contentData } from "../../data/content";
import { friendsData } from "../../data/friends";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import VideoTopIcon from "../../components/video/video-top-icon";
import Chat from "../../components/video/chat";
import VideoChat from "../../components/video/videochat";

export const getStaticProps = async ({ params }) => {
  const titleData = contentData.filter(
    (title) => title.slug === params.slug && title.video
  );
  return {
    props: {
      title: titleData[0],
      friendsDataList: friendsData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = contentData.map((path) => ({ params: { slug: path.slug } }));
  return { paths, fallback: false };
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
          controls={false}
          className="react-player"
          url={props.title.video}
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
