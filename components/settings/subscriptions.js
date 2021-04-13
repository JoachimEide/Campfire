import { useState } from "react";
import SubscriptionsStyle from "./subscriptions.module.css";

export default function Subscriptions() {
  const [subToggle, setSubToggle] = useState({
    netflix: false,
    disney: false,
    hbo: false,
    viaplay: false,
    tv2: false,
    nrk: false,
  });

  return (
    <div className={SubscriptionsStyle.container}>
      <h2 className="content-header">Manage subscriptions</h2>

      <div className={SubscriptionsStyle.subContainer}>
        <div className={SubscriptionsStyle.subRow}>
          <div
            toggle={subToggle.netflix}
            className={SubscriptionsStyle.subProvider}
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
          </div>

          <div className={SubscriptionsStyle.subProvider}>
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
            toggle={subToggle.viaplay}
            className={SubscriptionsStyle.subProvider}
          >
            <img
              className={SubscriptionsStyle.subLogo}
              alt="NRK logo"
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
          <div className={SubscriptionsStyle.subProvider}>
            <img
              className={SubscriptionsStyle.subLogo2}
              alt="Disney+ logo"
              src="/images/subscriptions/DisneyPlusLogo.svg"
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

          <div className={SubscriptionsStyle.subProvider}>
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

          <div className={SubscriptionsStyle.subProviderHbo}>
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
