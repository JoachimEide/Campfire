import Link from "next/link";
import SosialbarStyle from "./sosial.module.css";
import Image from "next/image";
import Buble from "./buble";

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
      <div className={SosialbarStyle.friendProfile}>
        <div className={SosialbarStyle.friendPic} classNameA>
          <Image
            alt="profile pic"
            src="/images/Joachim90.jpg"
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div className={SosialbarStyle.friendText}>
          <p className={SosialbarStyle.friendName}>Thomas Lund</p>
          <p className={SosialbarStyle.friendInfo}>Mandalorian - S2E6</p>
          <p className={SosialbarStyle.friendInfo}>Disney +</p>
        </div>
      </div>

      <div className={SosialbarStyle.friendClick}>
        <Buble className={SosialbarStyle.buble} />
        <button className={SosialbarStyle.joinButton}>Join</button>
        <button className={SosialbarStyle.profileButton}>Profile</button>
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
