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

export default function Netflix(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/mandalorian",
      alt: "mandalorian",
      src: "/images/mandalorian/mandalorianthumb.jpg",
    },
    {
      id: 2,
      link: "/series/wandavision",
      alt: "wandavision",
      src: "/images/wandavision/WandaVision.png",
    },
    {
      id: 3,
      link: "series/the-falcon-and-the-winter-soldier",
      alt: "The Falcon and the Winter Soldier",
      src: "/images/falcon/falcon_big.jpeg",
    },
    {
      id: 4,
      link: "series/the-nevers",
      alt: "The Nevers",
      src: "/images/nevers/nevers_big.jpg",
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
        <img src="/images/Netflix_logo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="netflix"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="netflix"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
