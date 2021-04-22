import Link from "next/link";
import NavStyle from "./titlenav.module.css";

export default function Nav(props) {
  return (
    <nav
      className={NavStyle.nav}
      style={
        !props.status
          ? { width: "90%", transition: "all 0.1s ease-in-out" }
          : { width: "82%", transition: "all 0.1s ease-in-out" }
      }
    >
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
        <div>
          <img
            className={NavStyle.notificationIcon}
            alt="notification"
            src="/images/notification.svg"
          />
        </div>
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
