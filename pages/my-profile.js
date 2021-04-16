import { contentData } from "../data/content";
import Layout from "../components/layout";
import TopFriends from "../components/profile/top-friends";
import ReviewRow from "../components/profile/review-row";
import ContentRow from "../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      contentDataList: contentData,
    },
  };
};

export default function Home(props) {
  return (
    <Layout socialStatus={props.socialStatus} event={props.event}>
      <TopFriends />
      <ReviewRow title="My reviews" />
      <ContentRow
        title="Public watch history"
        contentArray={props.contentDataList}
        param="watched"
        paramValue={true}
      />
    </Layout>
  );
}
