import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SocialbarStyle from "./social.module.css";
import Image from "next/image";
import Buble from "./buble";

export default function Socialbar({ href }) {
  const [clickFriend, setClickFriend] = useState(false);
  const [inSettings, setInSettings] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/settings") {
      setInSettings(true);
    } else {
      setInSettings(false);
    }
  });

  return (
    <div
      className={SocialbarStyle.container}
      style={inSettings ? { width: "8%" } : { width: "18%" }}
    >
      <div className={SocialbarStyle.yourProfile}>
        <Link href="/my-profile">
          <a className={SocialbarStyle.profilePic}>
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
      <div className={SocialbarStyle.status}>
        <h3>Social</h3>
      </div>
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
            inSettings
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
