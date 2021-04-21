import Link from "next/link";
import SocialbarStyle from "./titlesosial.module.css";
import TitleFriend from "./title-friend";
import Image from "next/image";

export default function Socialbar(props) {
  const watchingThisShow = props.friends.filter((friend) => {
    return friend.nowWatching.id === props.id;
  });
  const watchedThisShow = props.friends.map((friend, index) => {
    let friendObj = {
      key: index,
      online: friend.online,
      imgSrc: friend.imgSrc,
      slug: friend.slug,
      name: friend.name,
      title: props.title,
    };
    friend.watchedShow.forEach((show) => {
      if (show.id === props.id) {
        friendObj.service = show.service;
        friendObj.seasonAndEpisode = show.seasonAndEpisode;
      }
    });
    return friendObj;
  });

  return (
    <div
      className={SocialbarStyle.container}
      style={
        !props.status
          ? {
              width: "10%",
              borderLeft: `1px solid #d3381e`,
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
      <div className={SocialbarStyle.scrollContainer}>
        <h3 className="title-watch" style={{ marginBottom: "30px" }}>
          Watching now:
        </h3>
        {watchingThisShow.map((friend) => {
          return (
            <TitleFriend
              key={friend.id}
              status={props.status}
              name={friend.name}
              imgSrc={friend.imgSrc}
              title={friend.nowWatching.title}
              seasonAndEpisode={friend.nowWatching.seasonAndEpisode}
              service={friend.nowWatching.service}
              slug={friend.slug}
              online={friend.online}
            />
          );
        })}

        <h3 className="title-watch" style={{ marginBottom: "30px" }}>
          Watched this:
        </h3>
        {watchedThisShow.map((friend) => {
          return (
            <TitleFriend
              key={friend.id}
              status={props.status}
              name={friend.name}
              imgSrc={friend.imgSrc}
              title={friend.title}
              seasonAndEpisode={friend.seasonAndEpisode}
              service={friend.service}
              slug={friend.slug}
              online={friend.online}
            />
          );
        })}
      </div>
      <style jsx>{`
        h2 {
          margin: 10px;
          font-size: 1.1rem;
          text-align: center;
        }
        h3 {
          padding: 5px;
          text-align: center;
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
