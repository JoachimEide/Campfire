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
        title="Popular now"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Disney+"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Movies"
        param="type"
        paramValue="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Popular on Netflix"
        param="service"
        paramValue="Netflix"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Popular on HBO"
        param="service"
        paramValue="Hbo Nordic"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Popular on Viaplay"
        param="service"
        paramValue="Viaplay"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Popular on TV2 Sumo"
        param="service"
        paramValue="Tv2-Sumo"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Popular on NRK"
        param="service"
        paramValue="NRK"
      />
      <ContentRow
        title="Sport"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Sport"
      />
      <ContentRow
        title="Action"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Action"
      />
      <ContentRow
        title="Fantasy"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Fantasy"
      />
      <ContentRow
        title="Drama"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Drama"
      />
    </Layout>
  );
}
