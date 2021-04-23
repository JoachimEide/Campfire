import FriendInvite from "./friend-invite";
import InviteStyle from "./invites.module.css";

export default function Invite(props) {
  const friends = props.friends.filter((friend) => {
    return props.yourFriends.includes(friend.id);
  });

  return (
    <div
      className={InviteStyle.container}
      style={
        props.click
          ? { width: "15%", borderLeft: "1px solid #e59740" }
          : { width: "0" }
      }
    >
      <div
        className={InviteStyle.close}
        onClick={() => {
          props.event(!props.click);
        }}
      ></div>
      <div style={{ marginTop: "20%" }}>
        {friends.map((friend) => {
          return (
            <FriendInvite
              name={friend.name}
              slug={friend.slug}
              imgSrc={friend.imgSrc}
              online={friend.online}
            />
          );
        })}
      </div>
    </div>
  );
}
