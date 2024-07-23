import micIconWhite from "../assets/mic Icon white.png";
import styles from "./speech.module.css";
import chainiconWhite from "../assets/chain Icon white.png";
import uploadIconWhite from "../assets/upload Icon white.png";
import bigUploadIcon from "../assets/big upload Icon.png";
import dropIcon from "../assets/drop Icon.png";
import micIcon from "../assets/mic Icon.png";
import littleChainIcon from "../assets/little chain Icon.png"

import uploadIcon from "../assets/upload Icon.png";

export default function LinkFile() {
    return(
        <>
         <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            {/* <div className={styles.cardHeadItemOne}> */}
            <div className={styles.cardHeadItem}>
              {/* <img src={micIconWhite} alt="micIcon" /> */}
              <img src={micIcon} alt="micIcon" />
              <p>ضبط صدا</p>
            </div>

            <div className={styles.cardHeadItem}>
              <img src={uploadIcon} alt="uploadIcon" />
              <p>بارگذاری فایل</p>
            </div>

            <div className={styles.cardHeadItemThree}>
              <img src={chainiconWhite} alt="chainIcon" />

              <p>لینک</p>
            </div>
          </div>

          <div className={styles.cardBodyLink}>
            <div className={styles.bodyDescriptionUpload}>
              
                
                <div className={styles.linkInputSection}>
                  <input className={styles.linkInput}  placeholder="example.com/sample.mp3"></input>


                <div className={styles.linkLogo}>
                <img src={littleChainIcon} alt="littleChainIcon" />

                </div>

                </div>
              
              <p className={styles.uploadDescription}>
              نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
              و دکمه را فشار دهید              </p>
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