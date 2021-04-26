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

export default function Hbo(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/zack-snyder's-justice-league",
      alt: "Zack Snyder's Justice League",
      src: "/images/justice_league/justice.webp",
    },
    {
      id: 2,
      link: "/series/the-nevers",
      alt: "The Nevers",
      src: "/images/nevers/nevers_big.jpg",
    },
    {
      id: 3,
      link: "series/euphoria",
      alt: "Euphoria",
      src: "/images/euphoria/euphoria.jpeg",
    },
    {
      id: 4,
      link: "series/westworld",
      alt: "Westworld",
      src: "/images/westworld/westworld.jpeg",
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
        <img src="/images/HboLogo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="hbo"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="hbo"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
