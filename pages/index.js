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
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <Topcarousel />
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
        contentArray={props.contentDataList}
        title="Movies"
        param="type"
        paramValue="movie"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on Netflix"
        param="service"
        paramValue="netflix"
      />
      <ContentRow
        subscriptions={props.subscriptions}
        contentArray={props.contentDataList}
        title="Popular on HBO"
        param="service"
        paramValue="hbo"
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
        title="Sport"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Action"
      />
    </Layout>
  );
}
