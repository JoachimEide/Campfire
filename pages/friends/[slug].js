import { friendsData } from "../../data/friends";
import { contentData } from "../../data/content";
import Layout from "../../components/layout";
import TopFriends from "../../components/profile/top-friends";
import ReviewRow from "../../components/profile/review-row";
import ContentRow from "../../components/content/content-row";

export const getStaticProps = async ({ params }) => {
  const friendData = friendsData.filter((friend) => friend.id === params.id);
  return {
    props: {
      friend: friendsData[0],
      contentDataList: contentData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = friendsData.map((path) => ({ params: { slug: path.slug } }));
  return { paths, fallback: false };
};

export default function TitlePageFactory(props) {
  return (
    <Layout socialStatus={props.socialStatus} event={props.event}>
      <TopFriends />
      <ReviewRow title={`${props.friend.name} reviews`} />
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
