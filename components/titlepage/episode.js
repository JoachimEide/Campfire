import EpisodeStyle from "./episode.module.css";
import Image from "next/image";

export default function Episode(props) {
  return (
    <div className={EpisodeStyle.episode}>
      <div className={EpisodeStyle.image}>
        <Image
          src="/images/mandalorian/mandoS2E16.jpg"
          alt="mandalorian"
          width={254}
          height={144}
          layout="intrinsic"
        />
        <div className={EpisodeStyle.progressBar}></div>
      </div>
      <div className={EpisodeStyle.episodeText}>
        <h3>Chapter 16: The rescue</h3>
        <p>The Mandalorian and his allies attempt a daring rescue.</p>
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
