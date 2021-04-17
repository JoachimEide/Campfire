import { contentData } from "../data/content";
import Layout from "../components/layout";
import Topcarousel from "../components/content/topcarousel";
import ContentRow from "../components/content/content-row";

export const getStaticProps = async () => {
  return {
    props: {
      contentDataList: contentData,
    },
  };
};

export default function Netflix(props) {
  return (
    <Layout socialStatus={props.socialStatus} event={props.event}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <img src="/images/Netflix_logo.svg" style={{ width: "10%" }} />
      </div>
      <Topcarousel />
      <ContentRow
        title="Movies"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Netflix"
        param2="type"
        paramValue2="movie"
      />
      <ContentRow
        title="Series"
        contentArray={props.contentDataList}
        param="service"
        paramValue="Netflix"
        param2="type"
        paramValue2="series"
      />
    </Layout>
  );
}