import { useState } from "react";
import ChatStyle from "./chat.module.css";
import Image from "next/image";

export default function Chat(props) {
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState({});

  return (
    <div className={ChatStyle.container}>
      <div className={ChatStyle.allMessages}></div>
      <input></input>
    </div>
  );
}
