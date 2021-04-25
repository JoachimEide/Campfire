import { contentData } from "../../data/content";
import { friendsData } from "../../data/friends";
import Layout from "../../components/layout";
import Topcarousel from "../../components/content/topcarousel";
import Services from "../../components/content/services";
import ContentRow from "../../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
      contentDataList: contentData,
    },
  };
};

export default function Movies(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/irregulars",
      alt: "Irregulars",
      src: "/images/irregulars/irregulars.jpeg",
    },
    {
      id: 2,
      link: "series/the-nevers",
      alt: "The Nevers",
      src: "/images/nevers/nevers_big.jpg",
    },
    {
      id: 3,
      link: "series/the-falcon-and-the-winter-soldier",
      alt: "The Falcon and the Winter Soldier",
      src: "/images/falcon/falcon_big.jpeg",
    },
    {
      id: 4,
      link: "/series/wandavision",
      alt: "wandavision",
      src: "/images/wandavision/WandaVision.png",
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
        contentArray={props.contentDataList}
        title="Action series"
        param="genre"
        paramValue="Action"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Fantasy series"
        param="genre"
        paramValue="Fantasy"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Drama series"
        param="genre"
        paramValue="Drama"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Comedy series"
        param="genre"
        paramValue="Comedy"
        param2="type"
        paramValue2="series"
      />        
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on Disney+"
        param="service"
        paramValue="disney"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on Netflix"
        param="service"
        paramValue="netflix"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on TV2 Sumo"
        param="service"
        paramValue="tv2"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on Viaplay"
        param="service"
        paramValue="viaplay"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on NRK"
        param="service"
        paramValue="nrk"
        param2="type"
        paramValue2="series"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular series on Hbo Nordic"
        param="service"
        paramValue="hbo"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
