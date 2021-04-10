import Titlepage from "../../components/titlepage/titlepage";

export default function Mandalorian({ socialStatus, event }) {
  return (
    <Titlepage
      backgroundSrc="/images/Mandalorian.jpg"
      logo="/images/mandalorian_logo.svg"
      status={socialStatus}
      event={event}
    />
  );
}
