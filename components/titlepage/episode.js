import EpisodeStyle from "./episode.module.css";
import Image from "next/image";

export default function Episode(props) {
  return (
    <div className={EpisodeStyle.episode}>
      <div className={EpisodeStyle.container}>
        <Image
          className={EpisodeStyle.image}
          src={props.imgSrc}
          alt={props.episodeText}
          width={254}
          height={144}
          layout="intrinsic"
        />
        <div className={EpisodeStyle.progressBar}></div>
      </div>
      <div className={EpisodeStyle.episodeText}>
        <h3>{props.title}</h3>
        <p>{props.episodeText}</p>
      </div>
      <style jsx>{`
        h3 {
          font-size: 1.1rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
