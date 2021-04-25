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
      link: "/series/extraction",
      alt: "Extraction",
      src: "/images/extraction/ex_c.jpeg",
    },
    {
      id: 2,
      link: "/series/1917",
      alt: "1917",
      src: "/images/1917/1917.jpeg",
    },
    {
      id: 3,
      link: "series/justice_league",
      alt: "Zack Snyder's Justice League",
      src: "/images/justice_league/justice.webp",
    },
    {
      id: 4,
      link: "series/frozen2",
      alt: "Frozen 2",
      src: "/images/frozen2/frozen2.jpg",
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
        title="Action"
        param="genre"
        paramValue="Action"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Fantasy"
        param="genre"
        paramValue="Fantasy"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
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
        param2="type"
        paramValue2="movie"
      />
    </Layout>
  );
}
