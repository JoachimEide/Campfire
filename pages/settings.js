import Layout from "../components/layout";
import Subscriptions from "../components/subscriptions";
import TimeUsed from "../components/time-used";
import ProfileDetails from "../components/profile-details"

export default function Home() {
  return (
    <Layout>
      <Subscriptions />
      <TimeUsed />
      <ProfileDetails />
    </Layout>
  );
}
