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

export default function Disney(props) {
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
      link: "/series/the-falcon-and-the-winter-soldier",
      alt: "The Falcon and the Winter Soldier",
      src: "/images/falcon/falcon_big.jpeg",
    },
    {
      id: 4,
      link: "series/the-resident",
      alt: "The Resident",
      src: "/images/resident/resident_big.jpeg",
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
        <img src="/images/DisneyPlusLogo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Popular now"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[51, 19, 13, 1, 32]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Animation"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[51, 35, 10, 37, 36]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Fantasy"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[13, 29, 13, 19, 23]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Drama"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[38, 1, 104, 105]}
      />
    </Layout>
  );
}
