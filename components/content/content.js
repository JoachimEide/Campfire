import Link from "next/link";
import ContentStyle from "./content.module.css";
import Image from "next/image";

export default function Content(props) {
  return (
    <div style={{ position: "relative" }}>
      {props.history ? (
        <img
          className={ContentStyle.x}
          src="images/remove_history.svg"
          alt="remove icon"
          onClick={() => {
            props.historyEvent(props.watchHistoryAll, true, props.id);
          }}
        />
      ) : (
        ""
      )}
      <div
        className={ContentStyle.container}
        style={
          !props.subscriptions[props.serviceAlt].sub
            ? { filter: "grayscale(1)" }
            : { filter: "none" }
        }
      >
        <Link href={props.link}>
          <a>
            <Image
              className={ContentStyle.image}
              alt={props.alt}
              src={props.src}
              width={508}
              height={288}
              layout="intrinsic"
            />
          </a>
        </Link>
      </div>

      <div className={ContentStyle.titleService}>
        <p className={ContentStyle.title}>{props.alt}</p>
        <div className={ContentStyle.circle}>
          <img
            src={props.serviceSrc}
            alt={props.serviceAlt}
            style={
              !props.subscriptions[props.serviceAlt].sub
                ? { filter: "grayscale(1)" }
                : { filter: "none" }
            }
          />
        </div>
      </div>
    </div>
  );
}
