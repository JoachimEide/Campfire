import TitleNav from "./titleNav";
import Sosialbar from "./titleSosial";
import TitlePageStyle from "./titlepage.module.css";
import Image from "next/image";

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
      <TitleNav serviceSrc="/images/DisneyPlusLogo.svg" />
      <Sosialbar />
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
            <h2>Episodes</h2>
            <div className={TitlePageStyle.episode}>
              <div>
                <Image
                  src="/images/mandoS2E16.jpg"
                  alt="mandalorian"
                  width={254}
                  height={144}
                  layout="intrinsic"
                />
                <div className={TitlePageStyle.progressBar}></div>
              </div>
              <div className={TitlePageStyle.episodeText}>
                <h3>Chapter 16: The rescue</h3>
                <p>The Mandalorian and his allies attempt a daring rescue.</p>
              </div>
            </div>
          </div>
          <div className={TitlePageStyle.reviewsContainer}>
            <h2>Reviews</h2>
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
