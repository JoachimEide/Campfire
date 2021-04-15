import SubStyle from "./single-sub.module.css";

export default function Sub(props) {
  return (
    <div
      style={{ display: `${props.subToggle[props.service].display}` }}
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
        <p className={SubStyle.subActiveState}>Active</p>
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
          <button className={SubStyle.pauseReactivateButton}>Reactivate</button>
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
