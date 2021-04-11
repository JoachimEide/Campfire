import Nav from "./nav";
import Socialbar from "./socialbar/socialbar";
import Status from "./socialbar/status";

export default function Layout(props) {
  return (
    <div
      className="wrapper"
      style={
        !props.socialStatus
          ? { width: "92%", transition: "all 0.1s ease-in-out" }
          : { width: "82%", transition: "all 0.1s ease-in-out" }
      }
    >
      <Nav status={props.socialStatus} />
      <div style={{ marginTop: "85px" }}></div>
      <Socialbar status={props.socialStatus} event={props.event} />
      <Status status={props.socialStatus} event={props.event} />
      {props.children}
    </div>
  );
}
