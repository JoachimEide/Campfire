import ProfileDetailsStyle from "./profile-details.module.css";

export default function ProfileDetails() {
  return (
    <div className={ProfileDetailsStyle.container}>
      <h2 className="content-header">Pia Henriksen</h2>

      <img
        className={ProfileDetailsStyle.profilePic}
        alt="profile pic"
        src="/images/Joachim90.jpg"
      />

      <div className={ProfileDetailsStyle.text}>
        <div className={ProfileDetailsStyle.textAndIcon}>
          <p>pia.henriksen@gmail.com</p>
          <img
            className={ProfileDetailsStyle.pencilIcon}
            alt="profile pic"
            src="/images/pencil.svg"
          />
        </div>
        <div className={ProfileDetailsStyle.textAndIcon}>
          <p>Password: ********</p>
          <img
            className={ProfileDetailsStyle.pencilIcon}
            alt="profile pic"
            src="/images/pencil.svg"
          />
        </div>
        <p>Payment</p>
        <p>App settings</p>
        <p>Help</p>
        <p>Sign out</p>
      </div>
    </div>
  );
}
