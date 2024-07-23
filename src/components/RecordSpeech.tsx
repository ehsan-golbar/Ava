import micIconWhite from "../assets/mic Icon white.png";
import styles from "./speech.module.css";
import chainicon from "../assets/chain Icon.png";
import uploadIcon from "../assets/upload Icon.png";
import bigMicIcon from "../assets/big mic Icon.png";
import dropIcon from "../assets/drop Icon.png";


export default function RecordSpeech(){
    return(
        <>
                <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            {/* <div className={styles.cardHeadItemOne}> */}
            <div className={styles.cardHeadItemOne}>
              <img src={micIconWhite} alt="micIcon" />
              {/* <img src={micIcon} alt="micIcon" /> */}
              <p>ضبط صدا</p>
            </div>

            <div className={styles.cardHeadItem}>
              <img src={uploadIcon} alt="uploadIcon" />
              <p>بارگذاری فایل</p>
            </div>

            <div className={styles.cardHeadItem}>
              <img src={chainicon} alt="chainIcon" />

              <p>لینک</p>
            </div>
          </div>

          <div className={styles.cardBodyRecord}>
            <div className={styles.bodyDescriptionRecord}>
              <button className="buttonStyle">
                <div className={styles.recordLogo}>
                  <img src={bigMicIcon} alt="micIcon" />
                </div>
              </button>
              <p className={styles.recordDescription}>
                برای شروع به صحبت، دکمه را فشار دهید متن پیاده شده آن، در اینجا
                ظاهر شود
              </p>
            </div>
          </div>

          <div className={styles.cardFoot}>
            <p className={styles.footTitle}>زبان گفتار:</p>

            <div className={styles.langType}>
              <p className={styles.footItem}>فارسی</p>

              <button className="buttonStyle">
                <img src={dropIcon} alt="dropIcon" />
              </button>
            </div>
          </div>
        </div>
        </>
    )
}