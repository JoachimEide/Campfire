import { friendsData } from "../../data/friends";
import { contentData } from "../../data/content";
import Layout from "../../components/layout";
import ProfileTop from "../../components/profile/profile-top";
import TopFriends from "../../components/profile/top-friends";
import ReviewRow from "../../components/profile/review-row";
import ContentRow from "../../components/content/content-row";

export const getStaticProps = async ({ params }) => {
  const friendData = friendsData.filter(
    (friend) => friend.slug === params.slug
  );
  return {
    props: {
      friend: friendData[0],
      friendsDataList: friendsData,
      contentDataList: contentData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = friendsData.map((path) => ({ params: { slug: path.slug } }));
  return { paths, fallback: false };
};

export default function ProfilePageFactory(props) {
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <ProfileTop name={props.friend.name} imgSrc={props.friend.imgSrc} />
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
