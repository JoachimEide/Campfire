import TitleNav from "./titleNav";
import Sosialbar from "./titleSosial";
import TitlePageStyle from "./titlepage.module.css";

export default function Layout(props) {
  return (
    <div className="wrapper">
      <TitleNav serviceSrc="/images/DisneyPlusLogo.svg" />
      <Sosialbar />
      <div className="content">
        <div className={TitlePageStyle.titleTop}>
          <img
            className={TitlePageStyle.showLogo}
            src="/images/mandalorian_logo.svg"
            alt="mando logo"
          />
          <button className={TitlePageStyle.playButton}>Play</button>
          <button className={TitlePageStyle.watchlistButton}>
            Add to watchlist
          </button>
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
      `}</style>
    </div>
  );
}
