import Link from "next/link";
import Titlecard from "./titlecard.module.css";
import Image from "next/image";

export default function Card(props) {
  return (
    <Link href={props.link}>
      <a>
        <div className={Titlecard.container}>
          <Image
            className={Titlecard.image}
            alt={props.alt}
            src={props.src}
            width={1440}
            height={810}
            layout="intrinsic"
          />
        </div>
      </a>
    </Link>
  );
}
