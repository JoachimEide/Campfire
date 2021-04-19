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
      <Topcarousel />
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
