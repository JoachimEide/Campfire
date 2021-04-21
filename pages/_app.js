import "../styles/global.css";
import { useState } from "react";

const myReviews = [
  {
    id: 1,
    score: 10,
    reviewText: "Mandalorian is the best show ever! Star Wards is saved",
  },
  {
    id: 28,
    score: 7,
    reviewText: "Started out fun. Then it gets a bit slow and boring.",
  },
  {
    id: 27,
    score: 7,
    reviewText: "Best show ever... And then the last two seasons happened.",
  },
];

export default function App({ Component, pageProps }) {
  const [socialStatus, setSocialStatus] = useState(null);
  const [subscriptions, setSubscription] = useState({
    netflix: true,
    disney: true,
    hbo: false,
    nrk: true,
    viaplay: true,
    tv2: true,
  });
  const [reviews, setReviews] = useState(myReviews);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const statusEvent = (booleanValue) => {
    setSocialStatus(booleanValue);
  };
  const subEvent = (serviceProvider) => {
    let subCopy = { ...subscriptions };
    subCopy[serviceProvider] = !subCopy[serviceProvider];
    setSubscription(subCopy);
  };
  const reviewEvent = (titleObject) => {
    let reviewsCopy = [...reviews];
    reviewsCopy.push(titleObject);
    setWatchHistory(reviewsCopy);
  };
  const historyEvent = (titleObject) => {
    let watchHistoryCopy = [...watchHistory];
    watchHistoryCopy.push(titleObject);
    setWatchHistory(watchHistoryCopy);
  };
  const watchListEvent = (titleObject) => {
    let watchListCopy = [...watchList];
    watchListCopy.push(titleObject);
    setWatchList(watchListCopy);
  };
  return (
    <Component
      {...pageProps}
      event={statusEvent}
      socialStatus={socialStatus}
      subscriptions={subscriptions}
      subEvent={subEvent}
      reviews={reviews}
      reviewsEvent={reviewEvent}
      watchHistory={watchHistory}
      historyEvent={historyEvent}
      watchList={watchList}
      watchListEvent={watchListEvent}
    />
  );
}
