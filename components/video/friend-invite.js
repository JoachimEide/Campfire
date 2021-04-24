import { useState } from "react";
import Link from "next/link";
import FriendStyle from "./friend-invite.module.css";
import Image from "next/image";

export default function VideoFriend(props) {
  return (
    <div style={{ width: "100%" }} className={FriendStyle.friendContainer}>
      <div className={FriendStyle.friendProfile}>
        <div
          className={FriendStyle.friendPic}
          style={
            props.online
              ? { borderColor: "#3ffefb" }
              : { borderColor: "#d3381e" }
          }
        >
          <Image
            alt="profile pic"
            src={props.imgSrc}
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div className={FriendStyle.nameButtonWrapper}>
          <p className={FriendStyle.friendName}>{props.name}</p>
          <div className={FriendStyle.friendClick}>
            <button
              className={FriendStyle.joinButton}
              style={
                props.online
                  ? { borderColor: "#3ffefb" }
                  : { borderColor: "#d3381e" }
              }
            >
              Invite
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          margin: 10px;
          font-size: 1.1rem;
          text-align: center;
        }
        h3 {
          padding: 5px;
        }
      `}</style>
    </div>
  );
}
