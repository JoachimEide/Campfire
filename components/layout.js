import Nav from "./nav";
import Sosialbar from "./sosialbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Nav />
      <Sosialbar />
      {children}
    </div>
  );
}
