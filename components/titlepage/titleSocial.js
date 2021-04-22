import Link from "next/link";
import SocialbarStyle from "./titlesosial.module.css";
import TitleFriend from "./title-friend";
import Image from "next/image";

export default function Socialbar(props) {
  const watchingThisShow = props.friends.filter((friend) => {
    return friend.nowWatching.id === props.id;
  });

  const watchedThisShowCheck = () => {
    let watchedShow = [];
    let index = 0;
    props.friends.map((friend) => {
      friend.watchedShow.forEach((watch) => {
        if (watch.id === props.id) {
          let watchCopy = { ...watch };
          watchCopy.key = index;
          watchCopy.title = props.title;
          watchCopy.online = friend.online;
          watchCopy.name = friend.name;
          watchCopy.imgSrc = friend.imgSrc;
          watchCopy.slug = friend.slug;
          watchedShow.push(watchCopy);
          index++;
        }
      });
    });
    return watchedShow;
  };

  const watchedThisShow = watchedThisShowCheck();
  console.log(watchedThisShow);

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
              now={true}
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
              key={friend.key}
              now={false}
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
