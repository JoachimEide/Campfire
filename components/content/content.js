import Link from "next/link";
import ContentStyle from "./content.module.css";
import Image from "next/image";

export default function Content(props) {
  return (
    <Link href={props.link}>
      <a style={{ position: "relative" }}>
        {props.history ? (
          <img
            className={ContentStyle.x}
            src="images/remove_history.svg"
            alt="remove icon"
          />
        ) : (
          ""
        )}
        <div
          className={ContentStyle.container}
          style={
            !props.subscriptions[props.serviceAlt]
              ? { filter: "grayscale(1)" }
              : { filter: "none" }
          }
        >
          <Image
            className={ContentStyle.image}
            alt={props.alt}
            src={props.src}
            width={508}
            height={288}
            layout="intrinsic"
          />
        </div>
        <div className={ContentStyle.titleService}>
          <p className="thin-text">{props.alt}</p>
          <div className={ContentStyle.circle}>
            <img src={props.serviceSrc} alt={props.serviceAlt} />
          </div>
        </div>
      </a>
    </Link>
  );
}
