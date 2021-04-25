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

export default function Viaplay(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/the-rookie",
      alt: "The Rookie",
      src: "/images/the-rookie/the-rookie.jpeg",
    },
    {
      id: 2,
      link: "/series/1917",
      alt: "1917",
      src: "/images/1917/1917.jpeg",
    },
    {
      id: 3,
      link: "series/knives-out",
      alt: "Knives out",
      src: "/images/knives-out/knives-out.jpeg",
    },
    {
      id: 4,
      link: "series/kompani-lauritzen",
      alt: "Kompani Lauritzen",
      src: "/images/kompani-lauritzen/kompani-lauritzen.jpeg",
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
        <img src="/images/tv2sumo-logo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="tv2"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="tv2"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
