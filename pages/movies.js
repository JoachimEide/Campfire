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

export default function Movies(props) {
  return (
    <Layout socialStatus={props.socialStatus} event={props.event}>
      <Topcarousel />
      <Services subscriptions={props.subscriptions} />
      <ContentRow
        title="Popular movies on Disney+"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Disney+"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Drama movies"
        param="genre"
        paramValue="Drama"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Comedy movies"
        param="genre"
        paramValue="Comedy"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        contentArray={props.contentDataList}
        title="Movies on Netflix"
        param="service"
        paramValue="Netflix"
        param2="type"
        paramValue2="movie"
      />
    </Layout>
  );
}
