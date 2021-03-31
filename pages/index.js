import Layout from "../components/layout";
import Topcarousel from "../components/topcarousel";
import Services from "../components/services";
import ContentRow from "../components/content-row";

export default function Home() {
  return (
    <Layout>
      <Topcarousel />
      <Services />
      <ContentRow title="Friends are watching" />
      <ContentRow title="Friends are watching" />
      <ContentRow title="Friends are watching" />
    </Layout>
  );
}
