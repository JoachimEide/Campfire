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

export default function Nrk(props) {
  const topCarouselShows = [
    {
      id: 1,
      link: "/series/suffragette",
      alt: "Suffragette",
      src: "/images/suffragette/s.jpeg",
    },
    {
      id: 2,
      link: "/series/exit",
      alt: "Exit",
      src: "/images/exit/exit.jpeg",
    },
    {
      id: 3,
      link: "series/the-fall",
      alt: "The Fall",
      src: "/images/fall/fall.jpeg",
    },
    {
      id: 4,
      link: "series/norges-toffeste",
      alt: "Norges Tøffeste",
      src: "/images/norges-toffeste/norges-toffeste.jpeg",
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
        <img src="/images/NRK_TV_logo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel shows={topCarouselShows} />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Popular now"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[81, 82, 91, 3, 7, 89, 96]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Drama"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[81, 82, 90, 98, 99, 100, 101, 102, 103]}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title="Comedy"
        contentArray={props.contentDataList}
        param="id"
        paramValue={[91, 92, 94, 97, 96]}
      />
    </Layout>
  );
}
