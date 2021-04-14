import { useState } from "react";
import SubscriptionsStyle from "./subscriptions.module.css";

export default function Subscriptions() {
  const [subToggle, setSubToggle] = useState({
    netflix: { toggle: false, display: "flex" },
    disney: { toggle: false, display: "flex" },
    hbo: { toggle: false, display: "flex" },
    viaplay: { toggle: false, display: "flex" },
    tv2: { toggle: false, display: "flex" },
    nrk: { toggle: false, display: "flex" },
  });
  const handleButtonStateChange = (toggleKey) => {
    const stateCopy = { ...subToggle };
    stateCopy[toggleKey] = {
      toggle: !stateCopy[toggleKey].toggle,
      display: "flex",
    };
    const nextValue = stateCopy[toggleKey];
    Object.keys(stateCopy).forEach(
      (key) =>
        (stateCopy[key] = {
          toggle: false,
          display: nextValue.toggle ? "none" : "flex",
        })
    );
    stateCopy[toggleKey] = nextValue;
    setSubToggle(stateCopy);
  };

  return (
    <div className={SubscriptionsStyle.container}>
      <h2 className="content-header">Manage subscriptions</h2>

      <div className={SubscriptionsStyle.subContainer}>
        <div className={SubscriptionsStyle.subRow}>
          <div
            style={{ display: `${subToggle.netflix.display}` }}
            className={
              subToggle.netflix.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("netflix");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="netflix logo"
              src="/images/subscriptions/Netflix_sub.svg"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>Netflix</p>
              <p>109,- per month</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEdit}>
              <p className={SubscriptionsStyle.subActiveState}>Active</p>
              <p>Edit</p>
            </div>

            <div
              style={
                subToggle.netflix.toggle
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <button>Reactivate</button>
            </div>
            <div
              style={
                subToggle.netflix.toggle
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <button>Cancel</button>
            </div>
          </div>

          <div
            style={{ display: `${subToggle.nrk.display}` }}
            className={
              subToggle.nrk.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("nrk");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="netflix logo"
              src="/images/subscriptions/nrk_sub.svg"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>NRK TV</p>
              <p>Free</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEditNRK}>
              <p className={SubscriptionsStyle.subActiveState}>Active</p>
              <p>Edit</p>
            </div>
          </div>

          <div
            style={{ display: `${subToggle.viaplay.display}` }}
            className={
              subToggle.viaplay.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("viaplay");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="Viaplay logo"
              src="/images/subscriptions/Via.png"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>Viaplay</p>
              <p>109,- per month</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEdit}>
              <p className={SubscriptionsStyle.subActiveState}>Active</p>
              <p>Edit</p>
            </div>
          </div>
        </div>

        <div className={SubscriptionsStyle.subRow}>
          <div
            style={{ display: `${subToggle.disney.display}` }}
            className={
              subToggle.disney.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("disney");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="Disney+ logo"
              src="/images/subscriptions/DisneyPlusLogo2.svg"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>Disney+</p>
              <p>89,- per month</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEditDisney}>
              <p className={SubscriptionsStyle.subActiveState}>Active</p>
              <p>Edit</p>
            </div>
          </div>

          <div
            style={{ display: `${subToggle.tv2.display}` }}
            className={
              subToggle.tv2.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("tv2");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="TV2 Sumo logo"
              src="/images/subscriptions/tv2_sub.svg"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>TV2 Sumo</p>
              <p>109,- per month</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEdit}>
              <p className={SubscriptionsStyle.subActiveState}>Active</p>
              <p>Edit</p>
            </div>
          </div>

          <div
            style={{ display: `${subToggle.hbo.display}` }}
            className={
              subToggle.hbo.toggle
                ? SubscriptionsStyle.subProviderActive
                : SubscriptionsStyle.subProvider
            }
            onClick={() => {
              handleButtonStateChange("hbo");
            }}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="HBO logo"
              src="/images/subscriptions/hbo_sub.svg"
            />

            <div className={SubscriptionsStyle.subNamePrice}>
              <p>HBO Nordic</p>
              <p>0,- per month</p>
            </div>

            <div className={SubscriptionsStyle.subActiveEditHbo}>
              <p className={SubscriptionsStyle.subActiveStateHbo}>Paused</p>
              <p>Edit</p>
            </div>
          </div>
        </div>
        <div className={SubscriptionsStyle.subAddTotalRow}>
          <div className={SubscriptionsStyle.addSub}>
            <p>Add streaming service +</p>
          </div>
          <div className={SubscriptionsStyle.totalPrice}>
            <p>Total: 416,- NOK</p>
            <p className={SubscriptionsStyle.smallerText}>per month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
