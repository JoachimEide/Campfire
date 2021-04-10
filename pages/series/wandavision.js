import Titlepage from "../../components/titlepage/titlepage";

export default function Wandavision({ socialStatus, event }) {
  return (
    <Titlepage
      backgroundSrc="/images/WandaVision.jpeg"
      status={socialStatus}
      event={event}
    />
  );
}
