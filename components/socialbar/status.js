import StatusStyle from "./status.module.css";

export default function Status(props) {
  if (props.status === null) {
    return (
      <div className={StatusStyle.background}>
        <div className={StatusStyle.setStatus}>
          <h1>How will you be watching?</h1>
          <div className={StatusStyle.optionWrapper}>
            <button
              className={StatusStyle.socialButton}
              onClick={() => {
                props.event(true);
              }}
            >
              Social
            </button>
            <button
              className={StatusStyle.privateButton}
              onClick={() => {
                props.event(false);
              }}
            >
              Private
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
