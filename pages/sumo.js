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
        title="Popular now"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[76, 6, 69, 31]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Sport"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[64, 65, 67, 66, 63]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Reality"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[76, 73, 74, 80, 85]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Drama"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[6, 33, 87, 69, 75]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Comedy"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[70, 68, 69, 72]}
      />
    </Layout>
  );
}
