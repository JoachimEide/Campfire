import { useState } from "react";
import ChatStyle from "./chat.module.css";
import Image from "next/image";

export default function Chat(props) {
  const [allMessages, setAllMessages] = useState([
    { from: "you", message: "test" },
  ]);
  const [message, setMessage] = useState({});

  return (
    <div className={ChatStyle.container}>
      <div className={ChatStyle.head}>
        <h2>Chat</h2>
        <img
          src="/images/video_icon.svg"
          alt="video-icon"
          style={{ height: "17px" }}
        />
        <img
          src="/images/mic_icon.svg"
          alt="mic-icon"
          style={{ height: "23px" }}
        />
        <div className={ChatStyle.mini}></div>
      </div>
      <div className={ChatStyle.allMessages}>
        {allMessages.map((message) => {
          return (
            <div className={ChatStyle.message}>
              <Image
                className={ChatStyle.image}
                src={"/images/profile_pic.png"}
                alt="profile picture"
                height={40}
                width={40}
              />
              <p>{message.message}</p>
            </div>
          );
        })}
      </div>
      <input
        className={ChatStyle.input}
        placeholder="Type something..."
      ></input>
      <style jsx>{`
        select,
        textarea {
          color: white;
          padding: 3px 30px;
        }

        textarea:focus,
        input:focus {
          color: white;
        }

        ::placeholder {
          color: white;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
