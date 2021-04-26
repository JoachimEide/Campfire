import { contentData } from "../data/content";
import { friendsData } from "../data/friends";
import Layout from "../components/layout";
import Topcarousel from "../components/content/topcarousel";
import ContentRow from "../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
      contentDataList: contentData,
    },
  };
};

export default function Nrk(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/suffragette",
      alt: "Suffragette",
      src: "/images/suffragette/s.jpeg",
    },
    {
      id: 2,
      link: "/series/exit",
      alt: "Exit",
      src: "/images/exit/exit.jpeg",
    },
    {
      id: 3,
      link: "series/the-fall",
      alt: "The Fall",
      src: "/images/fall/fall.jpeg",
    },
    {
      id: 4,
      link: "series/norges-toffeste",
      alt: "Norges Tøffeste",
      src: "/images/norges-toffeste/norges-toffeste.jpeg",
    },
  ];
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <img src="/images/NRK_TV_logo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="nrk"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="nrk"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
