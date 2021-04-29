import Link from "next/link";
import ContentStyle from "./content.module.css";
import Image from "next/image";

export default function Content(props) {
  return (
    <div
      style={
        !props.subscriptions[props.serviceAlt].sub
          ? { position: "relative", opacity: "0.5" }
          : { position: "relative" }
      }
    >
      {!props.subscriptions[props.serviceAlt].sub ? (
        <img className={ContentStyle.x} src="images/lock.svg" alt="lock icon" />
      ) : (
        <></>
      )}
      {props.history ? (
        <img
          className={ContentStyle.x}
          src="images/remove_history.svg"
          alt="remove icon"
          style={{ cursor: "pointer" }}
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
        {props.subscriptions[props.serviceAlt].sub ? (
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
              {props.continueWatching ? (
                <div className={ContentStyle.progressBar}>
                  <div className={ContentStyle.progress}></div>
                </div>
              ) : (
                <></>
              )}
            </a>
          </Link>
        ) : (
          <div>
            <Image
              className={ContentStyle.image}
              alt={props.alt}
              src={props.src}
              width={508}
              height={288}
              layout="intrinsic"
            />
            {props.continueWatching ? (
              <div className={ContentStyle.progressBar}>
                <div className={ContentStyle.progress}></div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
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
