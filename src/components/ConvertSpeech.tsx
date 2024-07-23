import userIcon from "../assets/user Icon.png";
import styles from "./speech.module.css";
import dropIcon from "../assets/drop Icon.png";
import chainicon from "../assets/chain Icon.png"
import uploadIcon from "../assets/upload Icon.png"
import "../App.css";

import micIcon from "../assets/mic Icon.png"
export default function ConvertSpeech() {
  return (
    <>
      <div className={styles.speechBody}>
        <div className={styles.speechHead}>
          <div className={styles.userType}>
            <button className="buttonStyle">
              <img
                style={{ width: "fit-content" }}
                src={dropIcon}
                alt="dropIcon"
              />
            </button>
            <p style={{ height: "fit-content", color: "#00BA9F" }}>مهمان</p>

            <img src={userIcon} alt="userIcon" />
          </div>
        </div>
        <div className={styles.speechOverview}>
          <p className={styles.speechTitle}>تبدیل گفتار به متن</p>
          <p className={styles.speechDetails}>
            آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی
            را یادگرفته است و میتواند متن صحبت هار را بنویسد.
          </p>
        </div>

        <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            <div className={styles.cardHeadItemOne}>
                <img  src={micIcon} alt="micIcon" />
              <p>ضبط صدا</p>
            </div>

            <div className={styles.cardHeadItemOne}>
                <img src={uploadIcon} alt="uploadIcon" />
              <p>بارگذاری فایل</p>
            </div>

            <div className={styles.cardHeadItemOne}>
            <img src={chainicon} alt="chainIcon" />

              <p>لینک</p>
            </div>
          </div>

          <div className={styles.cardBody}>
            <p>بدنه</p>
          </div>
        </div>
      </div>
    </>
  );
}
