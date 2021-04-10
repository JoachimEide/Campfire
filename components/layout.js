import Nav from "./nav";
import Socialbar from "./socialbar/socialbar";
import Status from "./socialbar/status";

export default function Layout(props) {
  return (
    <div className="wrapper">
      <Nav />
      <div style={{ marginTop: "85px" }}></div>
      <Socialbar status={props.socialStatus} event={props.event} />
      <Status status={props.socialStatus} event={props.event} />
      {props.children}
    </div>
  );
}
