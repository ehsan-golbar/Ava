import styles from "./speech.module.css";
import dropIcon from "../assets/drop Icon.png";
import userIcon from "../assets/user Icon.png";

export default function UserType() {
  return (
    <>
      <div className={styles.speechHead}>
        <div className={styles.userType}>
          <img src={userIcon} alt="userIcon" />
          <p className={styles.userTypeItem}>مهمان</p>

          <button className="buttonStyle">
            <img
              style={{ width: "fit-content" }}
              src={dropIcon}
              alt="dropIcon"
            />
          </button>
        </div>
      </div>
    </>
  );
}
