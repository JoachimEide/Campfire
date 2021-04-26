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
      link: "series/the-crown",
      alt: "The Crown",
      src: "/images/crown/crown_big.cms",
    },
    {
      id: 2,
      link: "/series/snowpiercer",
      alt: "Snowpiercer",
      src: "/images/snowpiercer/snowpiercer_big.jpeg",
    },
    {
      id: 3,
      link: "/series/love-and-monsters",
      alt: "Love and monsters",
      src: "/images/love_and_monsters/love_and_monsters_c.jpg",
    },
    {
      id: 4,
      link: "series/the-queen's-gambit",
      alt: "The Queen's gambit",
      src: "/images/queens_gambit/queen.jpeg",
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
