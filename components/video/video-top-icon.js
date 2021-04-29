import { useRouter } from "next/router";
import Invites from "./invites";
import TopStyle from "./video-top-icons.module.css";

export default function VideoTop(props) {
  const router = useRouter();
  return (
    <div
      className="container"
      style={
        props.inactiveMouse
          ? { opacity: "0", transition: "all 0.3s ease-in-out" }
          : { opacity: "1", transition: "all 0.3s ease-in-out" }
      }
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          router.back();
        }}
      >
        <a className={TopStyle.close}></a>
      </div>
      {props.status ? (
        <img
          className="icon"
          src="/images/social_button.svg"
          alt="social-icon"
          onClick={() => {
            props.event(!props.target);
          }}
        />
      ) : (
        <></>
      )}
      <Invites
        click={props.target}
        event={props.event}
        chatEvent={props.chatEvent}
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
