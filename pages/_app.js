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
  const [watchHistory, setWatchHistory] = useState([
    {
      id: 1,
      service: "disney",
      serviceLogo: "/images/subscriptions/DisneyPlusLogo.svg",
      slug: "big-sky",
      thumbnailSrc: "/images/big_sky/big_sky.jpeg",
      title: "Big Sky",
    },
    {
      id: 13,
      service: "disney",
      serviceLogo: "/images/subscriptions/DisneyPlusLogo.svg",
      slug: "mandalorian",
      thumbnailSrc: "/images/mandalorian/Mandalorian.jpg",
      title: "Mandalorian",
    },
    {
      id: 15,
      service: "netflix",
      serviceLogo: "/images/subscriptions/Netflix_sub.svg",
      slug: "stranger-things",
      thumbnailSrc: "/images/stranger_things/stranger_things.png",
      title: "Stranger Things",
    },
    {
      id: 54,
      service: "viaplay",
      serviceLogo: "/images/subscriptions/Via.png",
      slug: "family-guy",
      thumbnailSrc: "/images/familyguy/family_guy_c.jpeg",
      title: "Family Guy",
    },
  ]);
  const [watchList, setWatchList] = useState([    {
    id: 2,
    service: "disney",
    serviceLogo: "/images/subscriptions/hbo_sub.svg",
    slug: "euphoria",
    thumbnailSrc: "/images/euphoria/euphoria.jpeg",
    title: "Euphoria",
  },
  {
    id: 4,
    service: "netflix",
    serviceLogo: "/images/subscriptions/Netflix_sub.svg",
    slug: "the-crown",
    thumbnailSrc: "/images/crown/crown.jpeg",
    title: "The Crown",
  },
  {
    id: 105,
    service: "disney",
    serviceLogo: "/images/subscriptions/DisneyPlusLogo.svg",
    slug: "911l",
    thumbnailSrc: "/images/911l/911l.jpeg",
    title: "911: Lone Star",
  },
  {
    id: 3,
    service: "nrk",
    serviceLogo: "//images/subscriptions/nrk_sub.svg",
    slug: "normal-people",
    thumbnailSrc: "/images/normal-people/normal-people.jpeg",
    title: "Normal People",
  }]);
  const [continueWatchingState, setContinueWatchingState] = useState([
    {
      id: 1,
      service: "disney",
      serviceLogo: "/images/subscriptions/DisneyPlusLogo.svg",
      slug: "big-sky",
      thumbnailSrc: "/images/big_sky/big_sky.jpeg",
      title: "Big Sky",
    },
    {
      id: 96,
      service: "nrk",
      serviceLogo: "/images/subscriptions/nrk_sub.svg",
      slug: "parterapi",
      thumbnailSrc: "/images/parterapi/parterapi.jpeg",
      title: "Parterapi",
    },
    {
      id: 13,
      service: "disney",
      serviceLogo: "/images/subscriptions/DisneyPlusLogo.svg",
      slug: "mandalorian",
      thumbnailSrc: "/images/mandalorian/Mandalorian.jpg",
      title: "Mandalorian",
    },
    {
      id: 15,
      service: "netflix",
      serviceLogo: "/images/subscriptions/Netflix_sub.svg",
      slug: "stranger-things",
      thumbnailSrc: "/images/stranger_things/stranger_things.png",
      title: "Stranger Things",
    },
    {
      id: 54,
      service: "viaplay",
      serviceLogo: "/images/subscriptions/Via.png",
      slug: "family-guy",
      thumbnailSrc: "/images/familyguy/family_guy_c.jpeg",
      title: "Family Guy",
    },
  ]);
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
      setWatchHistory(watchHistoryCopy.reverse());
      setContinueWatchingState(watchHistoryCopy.reverse());
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
      continueWatchingState={continueWatchingState}
      watchList={watchList}
      watchListEvent={watchListEvent}
    />
  );
}
