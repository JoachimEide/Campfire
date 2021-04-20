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
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <Topcarousel />
      <Services subscriptions={props.subscriptions} />
      <ContentRow
        title="Action"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Action"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        title="Thriller"
        contentArray={props.contentDataList}
        param="genre"
        paramValue="Thriller"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        title="Fantasy"
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
        contentArray={props.contentDataList}
        title="Comedy"
        param="genre"
        paramValue="Comedy"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
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
