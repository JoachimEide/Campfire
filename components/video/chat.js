import { useState, useRef, useEffect } from "react";
import ChatStyle from "./chat.module.css";
import Image from "next/image";

export default function Chat(props) {
  const [minified, setMinified] = useState(true);
  const [allMessages, setAllMessages] = useState([
    {
      from: "thomas",
      message: "Hei!",
      imgSrc: "/images/friends/sebastian-ali.jpeg",
    },
  ]);
  const [message, setMessage] = useState("");

  const bottom = useRef();

  const submitMessageHandle = (e) => {
    e.preventDefault();
    let allMessagesCopy = [...allMessages];
    allMessagesCopy.push({
      from: "you",
      message: message,
      imgSrc: "/images/profile_pic.png",
    });
    setMessage("");
    setAllMessages(allMessagesCopy);
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  }, [submitMessageHandle]);

  return (
    <div
      className={ChatStyle.container}
      style={props.iconClick ? { right: "22%" } : { right: "2%" }}
    >
      <div
        className={ChatStyle.head}
        onClick={() => {
          setMinified(!minified);
        }}
      >
        <h2>Chat</h2>
        <img
          src="/images/video_icon.svg"
          alt="video-icon"
          style={
            !props.videoChatClick ? { height: "17px" } : { display: "none" }
          }
          onClick={() => {
            props.videoEvent(true);
          }}
        />
        <img
          src="/images/mic_icon.svg"
          alt="mic-icon"
          style={
            !props.videoChatClick ? { height: "23px" } : { display: "none" }
          }
        />
        <div
          className={ChatStyle.minipadding}
          onClick={() => {
            setMinified(true);
          }}
        >
          <div className={ChatStyle.mini}></div>
        </div>
      </div>
      <div className={minified ? ChatStyle.hidden : ChatStyle.allMessages}>
        {allMessages.map((message, index) => {
          return (
            <div
              key={index}
              className={
                message.from === "you"
                  ? ChatStyle.message
                  : ChatStyle.messageFriend
              }
            >
              <Image
                className={ChatStyle.image}
                src={message.imgSrc}
                alt="profile picture"
                height={50}
                width={50}
              />
              <div
                className={
                  message.from === "you"
                    ? ChatStyle.messageContainer
                    : ChatStyle.messageFriendContainer
                }
              >
                <p>{message.message}</p>
              </div>
            </div>
          );
        })}
        <div ref={bottom}></div>
      </div>
      <form onSubmit={submitMessageHandle}>
        <input
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          className={minified ? ChatStyle.hidden : ChatStyle.input}
          placeholder="Type something..."
          value={message}
        ></input>
      </form>
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
