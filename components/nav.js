import Link from "next/link";
import NavStyle from "./nav.module.css";

export default function Nav(props) {
  console.log(props);
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
          <a className={NavStyle.search}>
            <img
              className={NavStyle.searchIcon}
              alt="search"
              src="/images/search_icon.svg"
            />
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
          margin: 0 10px 0 10px;
        }
      `}</style>
    </nav>
  );
}
