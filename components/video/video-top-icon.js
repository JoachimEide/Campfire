import Invites from "./invites";

export default function VideoTop(props) {
  return (
    <div className="container">
      <img
        className="icon"
        src="/images/social_button.svg"
        alt="social-icon"
        onClick={() => {
          props.event(!props.target);
        }}
      />
      <Invites
        click={props.target}
        event={props.event}
        friends={props.friends}
        yourFriends={props.yourFriends}
      />
      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-end;
          position: fixed;
          margin-top: 0px;
          z-index: 1;
          width: 100%;
        }
        .icon {
          margin: 10px;
          width: 45px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
