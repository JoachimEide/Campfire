import TitleNav from "./titleNav";
import Sosialbar from "./titleSosial";

export default function Layout() {
  return (
    <div className="wrapper">
      <TitleNav serviceSrc="/images/DisneyPlusLogo.svg" />
      <Sosialbar />
      <div className="content"></div>
      <style jsx>{`
        .content {
          background-image: url(/images/WandaVision.jpeg);
          background-size: cover;
          width: 82%;
          height: 90%;
          position: absolute;
        }
      `}</style>
    </div>
  );
}
