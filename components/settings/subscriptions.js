import { useState } from "react";
import SubscriptionsStyle from "./subscriptions.module.css";
import SingleSub from "./single-sub";

export default function Subscriptions(props) {
  const [subToggle, setSubToggle] = useState({
    netflix: { toggle: false, display: "flex" },
    disney: { toggle: false, display: "flex" },
    hbo: { toggle: false, display: "flex" },
    viaplay: { toggle: false, display: "flex" },
    tv2: { toggle: false, display: "flex" },
    nrk: { toggle: false, display: "flex" },
    addService: { toggle: false, display: "flex" },
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

  const totalPrice = () => {
    let total = 0;
    Object.keys(props.subscriptions).forEach((serv) => {
      if (props.subscriptions[serv].sub) {
        total += props.subscriptions[serv].price;
      }
    });
    return total;
  };

  const total = totalPrice();

  return (
    <div className={SubscriptionsStyle.container}>
      <h2 className="content-header">Manage subscriptions</h2>

      <div className={SubscriptionsStyle.subContainer}>
        <div className={SubscriptionsStyle.subRow}>
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"Netflix"}
            service="netflix"
            logoSrc={"/images/subscriptions/Netflix_sub.svg"}
            price={props.subscriptions.netflix.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"NRK TV"}
            service="nrk"
            logoSrc={"/images/subscriptions/nrk_sub.svg"}
            price={props.subscriptions.nrk.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"Viaplay"}
            service="viaplay"
            logoSrc={"/images/subscriptions/Via.png"}
            price={props.subscriptions.viaplay.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
        </div>

        <div className={SubscriptionsStyle.subRow}>
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"Disney +"}
            service="disney"
            logoSrc={"/images/subscriptions/DisneyPlusLogo.svg"}
            price={props.subscriptions.disney.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"TV2 Sumo"}
            service="tv2"
            logoSrc={"/images/subscriptions/tv2_sub.svg"}
            price={props.subscriptions.tv2.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
          <SingleSub
            total={total}
            subscribed={props.subscriptions}
            subEvent={props.subEvent}
            name={"HBO Nordic"}
            service="hbo"
            logoSrc={"/images/subscriptions/hbo_sub.svg"}
            price={props.subscriptions.hbo.price}
            subToggle={subToggle}
            handleButtonStateChange={handleButtonStateChange}
          />
        </div>
        <div
          style={{ display: `${subToggle.addService.display}` }}
          className={SubscriptionsStyle.subAddTotalRow}
        >
          <div className={SubscriptionsStyle.addSub}>
            <p>Add streaming service +</p>
          </div>
          <div className={SubscriptionsStyle.totalPrice}>
            <p>Total: {total},- NOK</p>
            <p className={SubscriptionsStyle.smallerText}>per month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
