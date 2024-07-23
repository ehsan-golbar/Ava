import userIcon from "../assets/user Icon.png";
import styles from "./speech.module.css";
import dropIcon from "../assets/drop Icon.png";
import chainicon from "../assets/chain Icon.png";
import uploadIcon from "../assets/upload Icon.png";
import RecordSpeech from "./RecordSpeech"
import "../App.css";

import micIcon from "../assets/mic Icon.png"; 
import micIconWhite from "../assets/mic Icon white.png";
import bigMicIcon from "../assets/big mic Icon.png";

import UploadFile from "./UploadFile"



export default function ConvertSpeech() {
  return (
    <>
      <div className={styles.speechBody}>
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
        <div className={styles.speechOverview}>
          <p className={styles.speechTitle}>تبدیل گفتار به متن</p>
          <p className={styles.speechDetails}>
            آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی
            را یادگرفته است و میتواند متن صحبت هار را بنویسد.
          </p>
        </div>


      <RecordSpeech></RecordSpeech>
      {/* card */}
      <UploadFile></UploadFile>
      </div>
    </>
  );
}
