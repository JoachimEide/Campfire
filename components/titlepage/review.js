import ReviewStyle from "./review.module.css";
import Image from "next/image";

export default function Reviews(props) {
  const review = props.reviews.filter((rev) => {
    return rev.id === props.showId;
  })[0];
  return (
    <div className={ReviewStyle.review}>
      <div className={ReviewStyle.friendPic}>
        <Image
          alt="profile pic"
          src={props.imgSrc}
          width={50}
          height={50}
          layout="intrinsic"
        />
      </div>
      <div className={ReviewStyle.reviewText}>
        <h3>{review.reviewScore}</h3>
        <p>{review.reviewText}</p>
      </div>
    </div>
  );
}
