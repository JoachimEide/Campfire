import { useState, useRef, useEffect } from "react";
import ChatStyle from "./chat.module.css";
import Image from "next/image";

export default function Chat(props) {
  const [minified, setMinified] = useState(true);
  const [allMessages, setAllMessages] = useState([
    { from: "you", message: "test" },
    { from: "thomas", message: "test" },
  ]);
  const [message, setMessage] = useState("");

  const bottom = useRef();

  const submitMessageHandle = (e) => {
    e.preventDefault();
    let allMessagesCopy = [...allMessages];
    allMessagesCopy.push({ from: "you", message: message });
    setMessage("");
    setAllMessages(allMessagesCopy);
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  }, [submitMessageHandle]);

  console.log(props);
  return (
    <div
      className={ChatStyle.container}
      style={props.iconClick ? { right: "20%" } : { right: "5%" }}
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
          style={{ height: "17px" }}
        />
        <img
          src="/images/mic_icon.svg"
          alt="mic-icon"
          style={{ height: "23px" }}
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
        {allMessages.map((message) => {
          return (
            <div
              className={
                message.from === "you"
                  ? ChatStyle.message
                  : ChatStyle.messageFriend
              }
            >
              <Image
                className={ChatStyle.image}
                src={"/images/profile_pic.png"}
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
