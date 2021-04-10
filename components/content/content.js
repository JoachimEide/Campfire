import Link from "next/link";
import ContentStyle from "./content.module.css";
import Image from "next/image";

export default function Content(props) {
  return (
    <Link href={props.link}>
      <a>
        <div className={ContentStyle.container}>
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
