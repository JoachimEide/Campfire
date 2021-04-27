import { useState } from "react";
import Friend from "./friend";
import TopFriendsStyle from "./top-friends.module.css";

export default function TopFriends(props) {
  const [allFriendsClick, setAllFriendsClick] = useState(false);

  const topFriendArray = props.friends.filter((friend) => {
    return props.yourFriends.includes(friend.id);
  });
  const topThreeFriends = topFriendArray.slice(0, 3);
  const restFriends = topFriendArray.slice(3);
  return (
    <div className={TopFriendsStyle.container}>
      <h2 className="content-header">Top friends</h2>

      <div className={TopFriendsStyle.friendContainer}>
        {topThreeFriends.map((friend) => {
          return (
            <Friend
              name={friend.name}
              imgSrc={friend.imgSrc}
              slug={friend.slug}
            />
          );
        })}
        <div className={TopFriendsStyle.buttonContainer}>
          <div
            className={TopFriendsStyle.allFriends}
            onClick={() => {
              setAllFriendsClick(!allFriendsClick);
            }}
          >
            <p>All friends</p>
          </div>
          {props.you ? (
            <div className={TopFriendsStyle.addFriends}>
              <p>Add friends</p>
              <img
                className={TopFriendsStyle.addIcon}
                alt="add icon"
                src="/images/addIcon.svg"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {allFriendsClick ? (
        <div className={TopFriendsStyle.restOfFriends}>
          {restFriends.map((friend, index) => {
            return (
              <Friend
                key={index}
                name={friend.name}
                imgSrc={friend.imgSrc}
                slug={friend.slug}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
