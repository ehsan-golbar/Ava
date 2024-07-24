import styles from "./archive.module.css";
import "../App.css"

import littleChain from "../assets/little chain Icon.png"
export default function Archive() {
  return (
    <>
      <div className={styles.archive}>
        <div className={styles.archiveHead}>
          <p> آرشیو من</p>
        </div>

        <div className={styles.archiveFiles}>

            <div className={styles.fileItems}>

                <div style={{width : '50%'}}>
                    <p className={styles.fileItemsTitle}>نام فایل</p>
                </div>

                <div  style={{width : '15%'}}>
                    <p className={styles.fileItemsTitle} >تاریخ بارگذاری</p>
                </div>


                <div  style={{width : '15%'}}>
                    <p className={styles.fileItemsTitle}>نوع  فایل </p>
                </div>

                <div  style={{width : '20%'}}>   
                    <p className={styles.fileItemsTitle}>مدت زمان </p>
                </div>

            </div>
          <ul className="ulStyle">
            <li>
              <div className={styles.fileItem}>
                <div className={styles.fileName}>
                    <div className={styles.typeLogo}>
                        <img src={littleChain} alt="typeLogo" />
                    </div>

                    <div className={styles.fileDescription}>
                  <p>  https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K </p>
                    </div>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.fileItem}>
                <p>two</p>
              </div>
            </li>

            <li>
              <div className={styles.fileItem}>
                <p>three</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
