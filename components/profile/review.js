import ReviewStyle from "./review.module.css";
import Image from "next/image";

export default function Review(props) {
  return (
    <div className={ReviewStyle.container}>
      <div className={ReviewStyle.row}>
        <div className={ReviewStyle.containerImage}>
          <Image
            className={ReviewStyle.image}
            alt={props.alt}
            src={props.src}
            width={300}
            height={160}
            layout="intrinsic"
          />
        </div>
        <div className={ReviewStyle.reviewText}>
          <h3>{`${props.score} / 10`}</h3>
          <p>{props.reviewText}</p>
        </div>
      </div>
      <div className={ReviewStyle.titleEdit}>
        <p className="thin-text">{props.alt}</p>
        <div
          className={ReviewStyle.editContainer}
          style={props.you ? { display: "flex" } : { display: "none" }}
        >
          <p>Edit</p>
          <img src="/images/pencil.svg" alt="edit icon" />
        </div>
      </div>
    </div>
  );
}
