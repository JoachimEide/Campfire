import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SocialbarStyle from "./social.module.css";
import Image from "next/image";
import Friend from "./friend";

export default function Socialbar(props) {
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
          ? {
              width: "8%",
              borderLeft: `1px solid ${statusColor}`,
              transition: "all 0.1s ease-in-out",
            }
          : { width: "18%", transition: "all 0.1s ease-in-out" }
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
        <h2>{!props.status ? "" : "Joachim Woll Eide"}</h2>
      </div>
      <button
        className={
          !props.status ? SocialbarStyle.statusPrivate : SocialbarStyle.status
        }
        onClick={() => {
          props.event(null);
        }}
      >
        <h3>{!props.status ? "Private" : "Social"}</h3>
      </button>
      <div className={SocialbarStyle.wrapper}>
        {props.friends.map(
          ({ id, name, imgSrc, slug, online, nowWatching }) => (
            <Friend
              key={id}
              name={name}
              imgSrc={imgSrc}
              slug={slug}
              online={online}
              nowWatching={nowWatching}
              status={props.status}
              inSettings={inSettings}
            />
          )
        )}
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
