import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "./nav";
import Socialbar from "./socialbar/socialbar";
import Status from "./socialbar/status";

export default function Layout(props) {
  const [inSettings, setInSettings] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/settings") {
      setInSettings(true);
    } else {
      setInSettings(false);
    }
  }, []);
  return (
    <div
      className="wrapper"
      style={
        inSettings || !props.socialStatus
          ? { width: "92%", transition: "all 0.1s ease-in-out" }
          : { width: "82%", transition: "all 0.1s ease-in-out" }
      }
    >
      <Nav status={props.socialStatus} inSettings={inSettings} />
      <div style={{ marginTop: "85px" }}></div>
      <Socialbar
        status={props.socialStatus}
        event={props.event}
        friends={props.friends}
      />
      <Status status={props.socialStatus} event={props.event} />
      {props.children}
      <footer></footer>
    </div>
  );
}
