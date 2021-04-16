import Layout from "../components/layout";
import Subscriptions from "../components/settings/subscriptions";
import TimeUsed from "../components/settings/time-used";
import ProfileDetails from "../components/settings/profile-details";

export default function Home({ socialStatus, event, subscriptions, subEvent }) {
  return (
    <Layout socialStatus={socialStatus} event={event}>
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
          <Subscriptions subscriptions={subscriptions} subEvent={subEvent} />
          <TimeUsed />
        </div>
      </div>
    </Layout>
  );
}
