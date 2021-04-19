import ProfileTopStyle from "./profile-top.module.css";
import Image from "next/image";

export default function ProfileTop(props) {
  return (
    <div className={ProfileTopStyle.container}>
      <div className={ProfileTopStyle.profilePic}>
        <Image
          alt="profile pic"
          src={props.imgSrc}
          width={90}
          height={90}
          layout="intrinsic"
        />
      </div>
      <h1>{props.name}</h1>
    </div>
  );
}
