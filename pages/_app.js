import "../styles/global.css";
import { useState } from "react";

const myReviews = [
  {
    id: 1,
    score: 10,
    reviewText: "Exciting show with some suprises along the way..",
  },
  {
    id: 28,
    score: 7,
    reviewText: "Started out fun. Then it gets a bit slow and boring.",
  },
  {
    id: 27,
    score: 7,
    reviewText: "A decent action movie, easy entertainment!",
  },
];

export default function App({ Component, pageProps }) {
  const [socialStatus, setSocialStatus] = useState(null);
  const [subscriptions, setSubscription] = useState({
    netflix: { sub: true, price: 109 },
    disney: { sub: true, price: 89 },
    hbo: { sub: false, price: 109 },
    nrk: { sub: true, price: 0 },
    viaplay: { sub: true, price: 109 },
    tv2: { sub: true, price: 109 },
  });
  const [yourFriends, setYourFriends] = useState([5, 3, 1, 2, 4]);
  const [reviews, setReviews] = useState(myReviews);
  const [watchHistory, setWatchHistory] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const statusEvent = (booleanValue) => {
    setSocialStatus(booleanValue);
  };
  const subEvent = (serviceProvider) => {
    let subCopy = { ...subscriptions };
    subCopy[serviceProvider].sub = !subCopy[serviceProvider].sub;
    setSubscription(subCopy);
  };
  const reviewEvent = (titleObject) => {
    let reviewsCopy = [...reviews];
    reviewsCopy.push(titleObject);
    setWatchHistory(reviewsCopy);
  };
  const historyEvent = (titleObject, remove = false, id = false) => {
    let watchHistoryCopy = [...watchHistory];
    if (remove && id) {
      let arrayWithRemoved = watchHistoryCopy.filter((title) => {
        return title.id !== id;
      });
      setWatchHistory(arrayWithRemoved);
    } else {
      watchHistoryCopy.push(titleObject);
      setWatchHistory(watchHistoryCopy);
    }
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
      yourFriends={yourFriends}
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
