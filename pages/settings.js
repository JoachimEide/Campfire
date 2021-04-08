import Layout from "../components/layout";
import Subscriptions from "../components/subscriptions";
import TimeUsed from "../components/time-used";

export default function Home() {
  return (
    <Layout>
      <Subscriptions />
      <TimeUsed />
    </Layout>
  );
}
