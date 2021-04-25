import { useState } from "react";
import { contentData } from "../data/content";
import { friendsData } from "../data/friends";
import Layout from "../components/layout";
import SearchResult from "../components/search-results";

export const getStaticProps = async () => {
  return {
    props: {
      friendsDataList: friendsData,
      contentDataList: contentData,
    },
  };
};

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Layout
      socialStatus={props.socialStatus}
      event={props.event}
      friends={props.friendsDataList}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <SearchResult
        subscriptions={props.subscriptions}
        searchTerm={searchTerm}
        content={props.contentDataList}
      />
      <style jsx>{`
        input {
          outline: none;
          width: 38%;
          margin-left: 40px;
          height: 35px;
          border-radius: 14px;
          background-color: rgba(7, 0, 0, 0.36);
          border: 1px solid #e59740;
        }

        input,
        select,
        textarea {
          color: white;
          padding: 3px 30px;
        }

        textarea:focus,
        input:focus {
          color: white;
        }

        ::placeholder {
          color: white;
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}
