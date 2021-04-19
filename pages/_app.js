import "../styles/global.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [socialStatus, setSocialStatus] = useState(null);
  const [subscriptions, setSubscription] = useState({
    netflix: true,
    disney: false,
    hbo: false,
    nrk: true,
    viaplay: true,
    tv2: true,
  });
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
      watchHistory={watchHistory}
      historyEvent={historyEvent}
      watchList={watchList}
      watchListEvent={watchListEvent}
    />
  );
}
