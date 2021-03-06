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
  const friends = props.friendsDataList.map((value) => {
    return value;
  });
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <ProfileTop
        name={props.friend.name}
        imgSrc={props.friend.imgSrc}
        online={props.friend.online}
      />
      <TopFriends
        friends={props.friendsDataList}
        yourFriends={props.friend.friends}
        you={false}
      />
      <ReviewRow
        title={`${props.friend.name}'s reviews`}
        reviews={props.friend.reviews}
        contentArray={props.contentDataList}
        you={false}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title={`${props.friend.name}'s watchlist`}
        contentArray={props.contentDataList}
        param="id"
        paramValue={props.friend.watchList}
        param2={false}
        paramValue2={false}
      />
      <ContentRow
        subscriptions={props.subscriptions}
        title={`${props.friend.name}'s watch history`}
        contentArray={props.contentDataList}
        param="id"
        paramValue={props.friend.watchHistory}
        param2={false}
        paramValue2={false}
      />
    </Layout>
  );
}
