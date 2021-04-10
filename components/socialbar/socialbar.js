import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SocialbarStyle from "./social.module.css";
import Image from "next/image";
import Buble from "./buble";

export default function Socialbar(props) {
  const [clickFriend, setClickFriend] = useState(false);
  const [inSettings, setInSettings] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/settings") {
      setInSettings(true);
    } else {
      setInSettings(false);
    }
  }, []);
  const statusColor = !props.status ? "#d3381e" : "#e59740";

  return (
    <div
      className={SocialbarStyle.container}
      style={
        inSettings || !props.status
          ? { width: "8%", borderLeft: `1px solid ${statusColor}` }
          : { width: "18%" }
      }
    >
      <div className={SocialbarStyle.yourProfile}>
        <Link href="/my-profile">
          <a
            className={SocialbarStyle.profilePic}
            style={
              !props.status
                ? { borderColor: "#d3381e" }
                : { borderColor: "#3ffefb" }
            }
          >
            <Image
              alt="profile pic"
              src="/images/Joachim90.jpg"
              width={90}
              height={90}
              layout="intrinsic"
            />
          </a>
        </Link>
        <h2>Joachim Woll Eide</h2>
      </div>
      <button
        className={SocialbarStyle.status}
        onClick={() => {
          props.event(null);
        }}
        style={
          !props.status
            ? { borderColor: "#d3381e" }
            : { borderColor: "#3ffefb" }
        }
      >
        <h3>{!props.status ? "Private" : "Social"}</h3>
      </button>
      <div className={SocialbarStyle.friendProfile}>
        <div
          className={SocialbarStyle.friendPic}
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
            inSettings || !props.status
              ? SocialbarStyle.friendTextHidden
              : SocialbarStyle.friendText
          }
        >
          <p className={SocialbarStyle.friendName}>Thomas Lund</p>
          <p className={SocialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SocialbarStyle.friendInfo}>Disney +</p>
        </div>
      </div>

      <div
        className={
          clickFriend
            ? SocialbarStyle.friendClickActive
            : SocialbarStyle.friendClick
        }
      >
        <Buble className={SocialbarStyle.buble} />
        <button className={SocialbarStyle.joinButton}>Join</button>
        <button className={SocialbarStyle.profileButton}>Profile</button>
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
