import { friendsData } from "../data/friends";
import Layout from "../components/layout";
import Subscriptions from "../components/settings/subscriptions";
import TimeUsed from "../components/settings/time-used";
import ProfileDetails from "../components/settings/profile-details";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ProfileDetails />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "40px",
          }}
        >
          <Subscriptions
            subscriptions={props.subscriptions}
            subEvent={props.subEvent}
          />
          <TimeUsed />
        </div>
      </div>
    </Layout>
  );
}
