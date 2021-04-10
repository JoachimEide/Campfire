import Layout from "../components/layout";
import Topcarousel from "../components/content/topcarousel";
import Services from "../components/content/services";
import ContentRow from "../components/content/content-row";

export default function Home() {
  return (
    <Layout>
      <Topcarousel />
      <Services />
      <ContentRow title="Popular now" />
      <ContentRow title="Friends are watching" />
      <ContentRow title="Friends are watching" />
    </Layout>
  );
}
