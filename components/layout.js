import Nav from "./nav";
import Socialbar from "./socialbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Nav />
      <div style={{ marginTop: "85px" }}></div>
      <Socialbar />
      {children}
    </div>
  );
}
