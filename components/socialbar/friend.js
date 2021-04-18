import { useState } from "react";
import Link from "next/link";
import FriendStyle from "./friends.module.css";
import Image from "next/image";
import Buble from "./buble";

export default function Friend(props) {
  const [clickFriend, setClickFriend] = useState(false);

  return (
    <div>
      <div className={FriendStyle.friendProfile}>
        <div
          className={FriendStyle.friendPic}
          onClick={() => {
            setClickFriend(!clickFriend);
          }}
        >
          <Image
            alt="profile pic"
            src="/images/Joachim90.jpg"
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div
          className={
            props.inSettings || !props.status
              ? FriendStyle.friendTextWrapperPrivate
              : FriendStyle.friendTextWrapper
          }
        >
          <div
            className={
              props.inSettings || !props.status
                ? FriendStyle.friendTextHidden
                : FriendStyle.friendText
            }
          >
            <p className={FriendStyle.friendName}>Thomas Lund</p>
            <p className={FriendStyle.friendInfo}>Mandalorian - S2E6</p>
            <p className={FriendStyle.friendInfo}>Disney +</p>
          </div>
        </div>
      </div>
      <div
        className={
          !clickFriend
            ? FriendStyle.friendClick
            : props.inSettings || !props.status
            ? FriendStyle.friendClickActivePriv
            : FriendStyle.friendClickActive
        }
      >
        <button className={FriendStyle.joinButton}>Join</button>
        <button className={FriendStyle.profileButton}>Profile</button>
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
        p {
          margin-left: 15px;
        }
      `}</style>
    </div>
  );
}
