import ProfileDetailsStyle from "./profile-details.module.css";

export default function ProfileDetails() {
  return (
    <div className={ProfileDetailsStyle.container}>
      <h2 className="content-header">Pia Henriksen</h2>

      <img 
      className={ProfileDetailsStyle.profilePic}
      alt="profile pic" 
      src="/images/Joachim90.jpg" />
    </div>
  );
}
