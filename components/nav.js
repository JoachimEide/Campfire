import { useState } from "react";
import Link from "next/link";
import NavStyle from "./nav.module.css";
import Notifications from "./notifications";
import NotificationIcon from "./svg/notification";
import SettingsIcon from "./svg/settings-icon";

export default function Nav(props) {
  const [notificationClick, setNotificationClick] = useState(false);
  return (
    <nav
      className={NavStyle.nav}
      style={
        props.inSettings || !props.status
          ? { width: "92%", transition: "all 0.1s ease-in-out" }
          : { width: "82%", transition: "all 0.1s ease-in-out" }
      }
    >
      <Link href="/">
        <a>
          <img
            className={NavStyle.logo}
            alt="campfire logo"
            src="/images/campfire_logo.svg"
          />
        </a>
      </Link>
      <div className={NavStyle.menu}>
        <Link href="/search">
          <a
            className={NavStyle.searchContainer}
            id="link"
            style={{ display: "flex" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 28 28"
              focusable="true"
              className="searchIcon"
            >
              <path
                data-name="search icon"
                d="M27.658,26.011,19.7,18.049a11.1,11.1,0,1,0-1.65,1.65l7.963,7.962a1.166,1.166,0,1,0,1.65-1.65ZM11.083,19.836a8.75,8.75,0,1,1,8.75-8.75A8.759,8.759,0,0,1,11.083,19.836Z"
                transform="translate(0 -0.003)"
              />
            </svg>
            <p>Search</p>
          </a>
        </Link>
        <Link href="/news">
          <a>
            <p>News</p>
          </a>
        </Link>
        <Link href="/movies">
          <a>
            <p>Movies</p>
          </a>
        </Link>
        <Link href="/series">
          <a>
            <p>Series</p>
          </a>
        </Link>
        <Link href="/my-profile">
          <a>
            <p>My Profile</p>
          </a>
        </Link>
      </div>
      <div className={NavStyle.right}>
        <Link href="/settings">
          <a>
            <SettingsIcon />
          </a>
        </Link>
        <div
          onClick={() => {
            setNotificationClick(!notificationClick);
          }}
        >
          <NotificationIcon />
        </div>
        <Notifications clicked={notificationClick} />
      </div>
      <style jsx>{`
        div,
        a,
        p {
          padding: 3px;
          font-weight: 600;
          margin: 0 10px 0 10px;
        }
      `}</style>
    </nav>
  );
}
