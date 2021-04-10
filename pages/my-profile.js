import Layout from "../components/layout";
import TopFriends from "../components/profile/top-friends";

export default function Home({ socialStatus, event }) {
  return (
    <Layout socialStatus={socialStatus} event={event}>
      <TopFriends />
    </Layout>
  );
}
