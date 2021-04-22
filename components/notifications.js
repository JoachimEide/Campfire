import NotificationStyle from "./notifications.module.css";

export default function Notifications({ clicked }) {
  return (
    <div
      className={
        !clicked
          ? NotificationStyle.container
          : NotificationStyle.containerActive
      }
    >
      <p className={NotificationStyle.text}>
        You curently have no notifications.
      </p>
    </div>
  );
}
