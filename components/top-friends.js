import Link from "next/link";
import TopFriendsStyle from "./top-friends.module.css";

export default function TopFriends() {
  return (
    <div className={TopFriendsStyle.container}>
      <h2 className="content-header">Top friends</h2>

      <div className={TopFriendsStyle.friendContainer}>
        <div className={TopFriendsStyle.friend}>
          <img
            className={TopFriendsStyle.friendProfilePic}
            alt="friend profile pic"
            src="/images/Joachim90.jpg"
          />

          <div>
            <div className={TopFriendsStyle.friendName}>
              <p>Thomas Lund</p>
            </div>
            <div className={TopFriendsStyle.friendOptions}>
              <p className="thin-text">Invite</p>
              <Link href="/my-profile">
                <a>
                  <p className="thin-text">Profile</p>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={TopFriendsStyle.friend}>
          <img
            className={TopFriendsStyle.friendProfilePic}
            alt="friend profile pic"
            src="/images/Joachim90.jpg"
          />

          <div>
            <div className={TopFriendsStyle.friendName}>
              <p>Sebastian Ali</p>
            </div>
            <div className={TopFriendsStyle.friendOptions}>
              <p className="thin-text">Invite</p>
              <Link href="/my-profile">
                <a>
                  <p className="thin-text">Profile</p>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={TopFriendsStyle.friend}>
          <img
            className={TopFriendsStyle.friendProfilePic}
            alt="friend profile pic"
            src="/images/Joachim90.jpg"
          />

          <div>
            <div className={TopFriendsStyle.friendName}>
              <p>Therese Engh</p>
            </div>
            <div className={TopFriendsStyle.friendOptions}>
              <p className="thin-text">Invite</p>
              <Link href="/my-profile">
                <a>
                  <p className="thin-text">Profile</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={TopFriendsStyle.buttonContainer}>
          <div className={TopFriendsStyle.allFriends}>
            <p>All friends</p>
          </div>
          <div className={TopFriendsStyle.addFriends}>
            <p>Add friends</p>
          </div>
        </div>
      </div>
    </div>
  );
}
