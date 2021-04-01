import Nav from "./nav";
import Sosialbar from "./sosialbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Nav />
      <div style={{ marginTop: "85px" }}></div>
      <Sosialbar />
      {children}
    </div>
  );
}
