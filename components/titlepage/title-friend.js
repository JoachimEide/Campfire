import { useState } from "react";
import Link from "next/link";
import FriendStyle from "./title-friend.module.css";
import Image from "next/image";

export default function TitleFriend(props) {
  const [clickFriend, setClickFriend] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <div
        className={FriendStyle.friendProfile}
        style={
          !props.status
            ? { justifyContent: "center" }
            : { justifyContent: "left" }
        }
      >
        <div
          className={FriendStyle.friendPic}
          style={
            props.online
              ? { borderColor: "#3ffefb" }
              : { borderColor: "#d3381e" }
          }
          onClick={() => {
            setClickFriend(!clickFriend);
          }}
        >
          <Image
            alt="profile pic"
            src={props.imgSrc}
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div
          className={
            !props.status
              ? FriendStyle.friendTextWrapperPrivate
              : FriendStyle.friendTextWrapper
          }
        >
          <div
            className={
              !props.status
                ? FriendStyle.friendTextHidden
                : FriendStyle.friendText
            }
          >
            <p className={FriendStyle.friendName}>{props.name}</p>
            <p className={FriendStyle.friendInfo}>
              {`${props.title} -`}
              {props.episode}
            </p>
            <p className={FriendStyle.friendInfo}>{props.service}</p>
          </div>
        </div>
      </div>
      <div
        className={
          !clickFriend
            ? FriendStyle.friendClick
            : !props.status
            ? FriendStyle.friendClickActivePriv
            : FriendStyle.friendClickActive
        }
      >
        {props.status && props.online ? (
          <button className={FriendStyle.joinButton}>Join</button>
        ) : (
          <></>
        )}
        <Link href={`/friends/${props.slug}`}>
          <button
            className={FriendStyle.profileButton}
            style={!props.status ? { width: "50%" } : { width: "35%" }}
          >
            Profile
          </button>
        </Link>
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
