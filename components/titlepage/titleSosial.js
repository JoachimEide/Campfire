import Link from "next/link";
import SosialbarStyle from "./titlesosial.module.css";
import Image from "next/image";

export default function Sosialbar() {
  return (
    <div className={SosialbarStyle.container}>
      <div className={SosialbarStyle.yourProfile}>
        <Link href="/my-profile">
          <a className={SosialbarStyle.profilePic}>
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
      <div className={SosialbarStyle.status}>
        <h3>Social</h3>
      </div>
      <h3 className="title-watch">Watching now:</h3>
      <div className={SosialbarStyle.friendProfile}>
        <Link href="/my-profile">
          <a className={SosialbarStyle.friendPic}>
            <Image
              alt="profile pic"
              src="/images/Joachim90.jpg"
              width={50}
              height={50}
              layout="intrinsic"
            />
          </a>
        </Link>
        <div className={SosialbarStyle.friendWatch}>
          <p className={SosialbarStyle.friendName}>Thomas Lund</p>
          <p className={SosialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SosialbarStyle.friendInfo}>Disney +</p>
        </div>
      </div>
      <h3 className="title-watch">Watched this:</h3>
      <div className={SosialbarStyle.friendProfile}>
        <Link href="/my-profile">
          <a className={SosialbarStyle.friendPic}>
            <Image
              alt="profile pic"
              src="/images/Joachim90.jpg"
              width={50}
              height={50}
              layout="intrinsic"
            />
          </a>
        </Link>
        <div className={SosialbarStyle.friendWatch}>
          <p className={SosialbarStyle.friendName}>Thomas Lund</p>
          <p className={SosialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SosialbarStyle.friendInfo}>Disney +</p>
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
