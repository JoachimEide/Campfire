import Layout from "../components/layout";
import Subscriptions from "../components/settings/subscriptions";
import TimeUsed from "../components/settings/time-used";
import ProfileDetails from "../components/settings/profile-details";

export default function Home() {
  return (
    <Layout>
      <Subscriptions />
      <TimeUsed />
      <ProfileDetails />
    </Layout>
  );
}
