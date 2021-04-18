import { contentData } from "../data/content";
import { friendsData } from "../data/friends";
import Layout from "../components/layout";
import TopFriends from "../components/profile/top-friends";
import ReviewRow from "../components/profile/review-row";
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
      <TopFriends />
      <ReviewRow title="My reviews" />
      <ContentRow
        title="Watchlist"
        contentArray={props.contentDataList}
        param={false}
        paramValue={false}
        param2={false}
        paramValue2={false}
        arrayParam={props.watchList}
      />
      <ContentRow
        title="Public watch history"
        history={true}
        contentArray={props.contentDataList}
        param={false}
        paramValue={false}
        param2={false}
        paramValue2={false}
        arrayParam={props.watchHistory}
      />
    </Layout>
  );
}
