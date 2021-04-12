import { contentData } from "../../data/content";
import Titlepage from "../../components/titlepage/titlepage";

export const getStaticProps = async ({ params }) => {
  const titleData = contentData.filter((title) => title.slug === params.slug);
  return {
    props: {
      title: titleData[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = contentData.map((path) => ({ params: { slug: path.slug } }));
  return { paths, fallback: false };
};

export default function TitlePageFactory(props) {
  return (
    <Titlepage
      backgroundSrc={props.title.backgroundSrc}
      logo={props.title.optionalShowLogo}
      status={props.socialStatus}
      event={props.event}
    />
  );
}
