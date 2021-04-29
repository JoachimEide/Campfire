import { contentData } from "../../data/content";
import { friendsData } from "../../data/friends";
import Titlepage from "../../components/titlepage/titlepage";

export const getStaticProps = async ({ params }) => {
  const titleData = contentData.filter((title) => title.slug === params.slug);
  return {
    props: {
      title: titleData[0],
      friendsDataList: friendsData,
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
      key={props.title.id}
      subscriptions={props.subscriptions}
      show={props.title}
      status={props.socialStatus}
      event={props.event}
      history={props.watchHistory}
      historyEvent={props.historyEvent}
      watchList={props.watchList}
      watchListEvent={props.watchListEvent}
      friends={props.friendsDataList}
    />
  );
}
