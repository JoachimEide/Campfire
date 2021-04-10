import Link from "next/link";
import ServiceStyle from "./services.module.css";

export default function Sosialbar() {
  return (
    <div className={ServiceStyle.container}>
      <Link href="/disney">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="disney plus"
          ></img>
        </a>
      </Link>
      <Link href="/netflix">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="netflix"
          ></img>
        </a>
      </Link>
      <Link href="/sumo">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="sumo"
          ></img>
        </a>
      </Link>
      <Link href="/viaplay">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="viaplay"
          ></img>
        </a>
      </Link>
      <Link href="/nrk">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="nrk"
          ></img>
        </a>
      </Link>
      <Link href="/hbo">
        <a className={ServiceStyle.logoBox}>
          <img
            className={ServiceStyle.img}
            src="/images/DisneyPlusLogo.svg"
            alt="hbo"
          ></img>
        </a>
      </Link>
    </div>
  );
}
