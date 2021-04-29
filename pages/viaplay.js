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
      link: "/series/the-invisible-man",
      alt: "The Invisible Man",
      src: "/images/theinvisibleman/invisible.jpeg",
    },
    {
      id: 2,
      link: "series/greys-anotomy",
      alt: "Grey's Anatomy",
      src: "/images/greysanotomy/greys.jpeg",
    },
    {
      id: 3,
      link: "series/spider-man-homecoming",
      alt: "Spider-Man: Homecoming",
      src: "/images/spiderman/spiderman_c.jpeg",
    },
    {
      id: 4,
      link: "/series/the-office",
      alt: "The Office",
      src: "/images/theoffice/office.jpeg",
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
        <img src="/images/viaplay-logo.png" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Popular now"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[5, 55, 16, 53]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Action"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[55, 26, 16, 57]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Drama"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[56, 57, 60, 5]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Comedy"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[59, 53, 54, 60, 61]}
      />
    </Layout>
  );
}
