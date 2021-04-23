import InviteStyle from "./invites.module.css";

export default function Invite(props) {
  return (
    <div
      className={InviteStyle.container}
      style={props.click ? { width: "15%" } : { width: "0" }}
    >
      <div
        className={InviteStyle.close}
        onClick={() => {
          props.event(!props.click);
        }}
      ></div>
    </div>
  );
}
