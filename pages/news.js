import { contentData } from "../data/content";
import { friendsData } from "../data/friends";
import Layout from "../components/layout";
import Topcarousel from "../components/content/topcarousel";
import Services from "../components/content/services";
import ContentRow from "../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
      contentDataList: contentData,
    },
  };
};

export default function Home(props) {
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
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title={`News`}
        contentArray={props.contentDataList}
        param="id"
        paramValue={[1, 2, 3, 4, 5]}
        param2={false}
        paramValue2={false}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title={`News`}
        contentArray={props.contentDataList}
        param="id"
        paramValue={[6, 21, 99, 50, 31]}
        param2={false}
        paramValue2={false}
      />
    </Layout>
  );
}
