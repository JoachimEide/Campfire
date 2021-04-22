import ProfileDetailsStyle from "./profile-details.module.css";

export default function ProfileDetails() {
  return (
    <div className={ProfileDetailsStyle.container}>
      <h2 className="content-header">Pia Henriksen</h2>

      <img
        className={ProfileDetailsStyle.profilePic}
        alt="profile pic"
        src="/images/profile_pic.png"
      />

      <div className={ProfileDetailsStyle.text}>
        <div className={ProfileDetailsStyle.textAndIcon}>
          <p>pia.henriksen@gmail.com</p>
          <img
            className={ProfileDetailsStyle.pencilIcon}
            alt="edit email adress icon"
            src="/images/pencil.svg"
          />
        </div>
        <div className={ProfileDetailsStyle.textAndIcon}>
          <p>Password: ********</p>
          <img
            className={ProfileDetailsStyle.pencilIcon}
            alt="edit password icon"
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
