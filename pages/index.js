import { contentData } from "../data/content";
import Layout from "../components/layout";
import Topcarousel from "../components/content/topcarousel";
import Services from "../components/content/services";
import ContentRow from "../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      contentDataList: contentData,
    },
  };
};

export default function Home(props) {
  return (
    <Layout socialStatus={props.socialStatus} event={props.event}>
      <Topcarousel />
      <Services />
      <ContentRow
        title="Popular now"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Disney+"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Movies"
        param="type"
        paramValue="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Friends are watching"
      />
    </Layout>
  );
}
