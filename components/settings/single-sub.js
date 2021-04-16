import SubStyle from "./single-sub.module.css";

export default function Sub(props) {
  console.log(props);
  return (
    <div
      style={{
        display: `${props.subToggle[props.service].display}`,
        border: `solid 0.5px ${
          props.subscribed[props.service] ? "#2cfffc" : "#fbab29"
        }`,
      }}
      className={
        props.subToggle[props.service].toggle
          ? SubStyle.subProviderActive
          : SubStyle.subProvider
      }
      onClick={() => {
        props.handleButtonStateChange(props.service);
      }}
    >
      <div className={SubStyle.logoNamePriceContainer}>
        <img
          className={SubStyle.subLogo}
          alt={`${props.service} logo`}
          src={props.logoSrc}
        />
        <div className={SubStyle.subNamePrice}>
          <p>{props.name}</p>
          <p>{props.price > 1 ? `${props.price},- per month` : `Free`}</p>
        </div>
      </div>

      <div className={SubStyle.subActiveEdit}>
        <p
          className={
            props.subscribed[props.service]
              ? SubStyle.subActiveState
              : SubStyle.subPausedState
          }
        >
          {props.subscribed[props.service] ? "Active" : "Paused"}
        </p>
        <p>Edit</p>
      </div>
      <div className={SubStyle.buttonsContainer}>
        <div
          className={SubStyle.pauseReactivateContainer}
          style={
            props.subToggle[props.service].toggle
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <button
            className={
              props.subscribed[props.service]
                ? SubStyle.pauseButton
                : SubStyle.reactivateButton
            }
            onClick={() => {
              props.subEvent(props.service);
            }}
          >
            {props.subscribed[props.service] ? "Pause" : "Reactivate"}
          </button>
          <div className={SubStyle.total}>
            <p>New total: 515,-</p>
            <p>
              <span> per month</span>
            </p>
          </div>
        </div>
        <div
          style={
            props.subToggle[props.service].toggle
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <button className={SubStyle.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
