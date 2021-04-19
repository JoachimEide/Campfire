import TitleNav from "./titleNav";
import Socialbar from "./titleSocial";
import Status from "../socialbar/status";
import Episode from "./episode";
import Review from "./review";
import TitlePageStyle from "./titlepage.module.css";

const OptionalLogo = (obj) => {
  if (obj.optionalShowLogo) {
    return (
      <img
        className={TitlePageStyle.showLogo}
        src={obj.optionalShowLogo}
        alt="show logo"
      />
    );
  } else {
    return <div className={TitlePageStyle.space}></div>;
  }
};

export default function Layout(props) {
  const reviewsFilter = props.friends.filter((friend) => {
    return friend.reviews.map((review) => {
      return review.id === props.show.id;
    });
  });
  console.log(reviewsFilter);

  return (
    <div className="wrapper">
      <TitleNav serviceSrc={props.show.serviceTitleLogo} />
      <Socialbar
        status={props.status}
        event={props.event}
        id={props.show.id}
        friends={props.friends}
      />
      <Status status={props.status} event={props.event} />
      <div className="content">
        <div className={TitlePageStyle.titleTop}>
          {OptionalLogo(props.show)}
          <button
            className={TitlePageStyle.playButton}
            onClick={() => {
              if (props.status) {
                props.historyEvent({
                  id: props.show.id,
                  title: props.show.title,
                  slug: props.show.slug,
                  service: props.show.service,
                  serviceLogo: props.show.serviceLogo,
                  thumbnailSrc: props.show.thumbnailSrc,
                });
              }
            }}
          >
            Play
          </button>
          <button
            className={TitlePageStyle.watchlistButton}
            onClick={() => {
              props.watchListEvent({
                id: props.show.id,
                title: props.show.title,
                slug: props.show.slug,
                service: props.show.service,
                serviceLogo: props.show.serviceLogo,
                thumbnailSrc: props.show.thumbnailSrc,
              });
            }}
          >
            Add to watchlist
          </button>
        </div>
        <div className={TitlePageStyle.episodeReviewContainer}>
          <div className={TitlePageStyle.episodesContainer}>
            <h2>{props.type == "series" ? "Season 1" : "Movie"}</h2>
            {props.show.episodes.map(({ id, title, episodeText, imgSrc }) => (
              <Episode
                key={id}
                title={title}
                episodeText={episodeText}
                imgSrc={imgSrc}
              />
            ))}
          </div>
          <div className={TitlePageStyle.reviewsContainer}>
            <h2>Reviews</h2>
            <button className={TitlePageStyle.reviewButton}>
              Write review
            </button>
            {reviewsFilter.map((friendRev) => (
              <Review
                key={friendRev.id}
                imgSrc={friendRev.imgSrc}
                online={friendRev.online}
                slug={friendRev.slug}
                reviews={friendRev.reviews}
                showId={props.show.id}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0),
              rgba(17, 24, 32, 0.7),
              rgba(17, 24, 32, 1)
            ),
            url(${props.show.backgroundSrc});
          background-size: cover;
          background-position: center;
          width: 82%;
          height: 90%;
          position: absolute;
        }
        h2 {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
