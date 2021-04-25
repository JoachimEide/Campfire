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
      <Services subscriptions={props.subscriptions} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Popular now"
        contentArray={props.contentDataList}
        param="service"
        paramValue="disney"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Action"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Action"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Fantasy"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Fantasy"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Crime"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Crime"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Drama"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Drama"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Comedy"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Comedy"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="For the family"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Family"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Reality shows"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Reality"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Sport"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Sport"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on Viaplay"
        param="service"
        paramValue="viaplay"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on TV2 Sumo"
        param="service"
        paramValue="tv2"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on NRK"
        param="service"
        paramValue="nrk"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on HBO"
        param="service"
        paramValue="hbo"
      />
    </Layout>
  );
}
