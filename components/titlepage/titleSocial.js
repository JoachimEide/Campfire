import Link from "next/link";
import SocialbarStyle from "./titlesosial.module.css";
import Image from "next/image";

export default function Socialbar(props) {
  return (
    <div
      className={
        !props.status
          ? SocialbarStyle.containerPrivate
          : SocialbarStyle.container
      }
    >
      <div className={SocialbarStyle.yourProfile}>
        <Link href="/my-profile">
          <a
            className={
              !props.status
                ? SocialbarStyle.profilePicPrivate
                : SocialbarStyle.profilePic
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
        onClick={() => {
          props.event(null);
        }}
        className={
          !props.status ? SocialbarStyle.statusPrivate : SocialbarStyle.status
        }
      >
        <h3>{!props.status ? "Private" : "Social"}</h3>
      </button>
      <h3 className="title-watch">Watching now:</h3>
      <div className={SocialbarStyle.friendProfile}>
        <Link href="/my-profile">
          <a className={SocialbarStyle.friendPic}>
            <Image
              alt="profile pic"
              src="/images/Joachim90.jpg"
              width={50}
              height={50}
              layout="intrinsic"
            />
          </a>
        </Link>
        <div className={SocialbarStyle.friendWatch}>
          <p className={SocialbarStyle.friendName}>Thomas Lund</p>
          <p className={SocialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SocialbarStyle.friendInfo}>Disney +</p>
        </div>
      </div>
      <h3 className="title-watch">Watched this:</h3>
      <div className={SocialbarStyle.friendProfile}>
        <Link href="/my-profile">
          <a className={SocialbarStyle.friendPic}>
            <Image
              alt="profile pic"
              src="/images/Joachim90.jpg"
              width={50}
              height={50}
              layout="intrinsic"
            />
          </a>
        </Link>
        <div className={SocialbarStyle.friendWatch}>
          <p className={SocialbarStyle.friendName}>Thomas Lund</p>
          <p className={SocialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SocialbarStyle.friendInfo}>Disney +</p>
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
        .title-watch {
          margin-top: 50px;
        }
        p {
          margin-left: 15px;
        }
      `}</style>
    </div>
  );
}
