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

export default function Movies(props) {
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
        title="Popular movies on Disney+"
        contentArray={props.contentDataList}
        param="service"
        paramValue="disney"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Fantasy"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Drama"
        param="genre"
        paramValue="Drama"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Comedy"
        param="genre"
        paramValue="Comedy"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Animation"
        param="genre"
        paramValue="Animation"
      />
    </Layout>
  );
}
