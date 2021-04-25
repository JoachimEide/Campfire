import { useState } from "react";
import ChatStyle from "./chat.module.css";
import Image from "next/image";

export default function Chat(props) {
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState({});

  return (
    <div className={ChatStyle.container}>
      <div className={ChatStyle.head}>
        <h2>Chat</h2>
        <img src="/images/video_icon.svg" alt="video-icon" />
        <img src="/images/mic_icon.svg" alt="mic-icon" />
        <h2>-</h2>
      </div>
      <div className={ChatStyle.allMessages}></div>
      <input></input>
    </div>
  );
}
