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
      <ContentRow
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Disney+"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Disney+"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}
