import Link from "next/link";
import NavStyle from "./titlenav.module.css";

export default function Nav(props) {
  return (
    <nav className={NavStyle.nav}>
      <Link href="/">
        <a className={NavStyle.backContainer}>
          <img
            className={NavStyle.backIcon}
            alt="search"
            src="/images/backArrow.svg"
          />
          <p>Back</p>
        </a>
      </Link>
      <img
        className={NavStyle.serviceLogo}
        src={props.serviceSrc}
        alt="service logo"
      />
      <div className={NavStyle.right}>
        <Link href="/settings">
          <a>
            <img
              className={NavStyle.settingsIcon}
              alt="settings"
              src="/images/settings_icon.svg"
            />
          </a>
        </Link>
        <Link href="/notification">
          <a>
            <img
              className={NavStyle.notificationIcon}
              alt="notification"
              src="/images/notification.svg"
            />
          </a>
        </Link>
      </div>
      <style jsx>{`
        a,
        p {
          padding: 3px;
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
}
