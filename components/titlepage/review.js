import ReviewStyle from "./review.module.css";
import Image from "next/image";

export default function Reviews(props) {
  console.log(props);
  return (
    <div className={ReviewStyle.review}>
      <div className={ReviewStyle.friendPic}>
        <Image
          alt="profile pic"
          src="/images/Joachim90.jpg"
          width={50}
          height={50}
          layout="intrinsic"
        />
      </div>
      <div className={ReviewStyle.reviewText}>
        <h3>10/10</h3>
        <p>Best show in a long time! Who's up for watching together?</p>
      </div>
    </div>
  );
}
