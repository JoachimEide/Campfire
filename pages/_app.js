import "../styles/global.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [socialStatus, setSocialStatus] = useState(null);
  const statusEvent = (booleanValue) => {
    setSocialStatus(booleanValue);
  };
  return (
    <Component {...pageProps} event={statusEvent} socialStatus={socialStatus} />
  );
}
