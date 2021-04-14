import TitleNav from "./titleNav";
import Socialbar from "./titleSocial";
import Status from "../socialbar/status";
import Episode from "./episode";
import Review from "./review";
import TitlePageStyle from "./titlepage.module.css";

const OptionalLogo = (props) => {
  if (props.logo) {
    return (
      <img
        className={TitlePageStyle.showLogo}
        src={props.logo}
        alt="show logo"
      />
    );
  } else {
    return <div className={TitlePageStyle.space}></div>;
  }
};

export default function Layout(props) {
  return (
    <div className="wrapper">
      <TitleNav serviceSrc={props.serviceLogo} />
      <Socialbar status={props.status} event={props.event} />
      <Status status={props.status} event={props.event} />
      <div className="content">
        <div className={TitlePageStyle.titleTop}>
          {OptionalLogo(props)}
          <button className={TitlePageStyle.playButton}>Play</button>
          <button className={TitlePageStyle.watchlistButton}>
            Add to watchlist
          </button>
        </div>
        <div className={TitlePageStyle.episodeReviewContainer}>
          <div className={TitlePageStyle.episodesContainer}>
            <h2>{props.type == "series" ? "Season 1" : "Movie"}</h2>
            {props.episodes.map(({ id, title, episodeText, imgSrc }) => (
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
            <Review />
            <Review />
            <Review />
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
            url(${props.backgroundSrc});
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
