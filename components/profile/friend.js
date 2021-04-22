import FriendStyle from "./friend.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Review(props) {
  return (
    <div className={FriendStyle.friend}>
      <Image
        className={FriendStyle.friendProfilePic}
        alt="friend profile pic"
        src={props.imgSrc}
        width={50}
        height={50}
        layout="intrinsic"
      />

      <div className={FriendStyle.nameOptionContainer}>
        <div className={FriendStyle.friendName}>
          <p>{props.name}</p>
        </div>
        <div className={FriendStyle.friendOptions}>
          <p className="thin-text">Invite</p>
          <Link href={`/friends/${props.slug}`}>
            <a>
              <p className="thin-text">Profile</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
