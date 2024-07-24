import styles from "./archive.module.css";
import "../App.css";

import downloadIcon from "../assets/download Icon.png"
import copyIcon from "../assets/copy Icon.png"
import wordIcon from "../assets/Word icon.png"
import deleteIcon from "../assets/del Btn.png"

import littleChain from "../assets/little chain Icon.png";
import FileTypeIcon from "./FileTypeIcon"
export default function Archive() {
  return (
    <>
      <div className={styles.archive}>
        <div className={styles.archiveHead}>
          <p> آرشیو من</p>
        </div>

        <div className={styles.archiveFiles}>
          <div className={styles.fileItems}>
            <div style={{ width: "50%" }}>
              <p className={styles.fileItemsTitle}>نام فایل</p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>تاریخ بارگذاری</p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>نوع فایل </p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>مدت زمان </p>
            </div>
          </div>
          <ul className="ulStyle">
            <li>
              <div className={styles.fileItem}>
                <div className={styles.fileName}>
                    
                    <FileTypeIcon fileType="chain"></FileTypeIcon>
                   

                  <div className={styles.fileDescription}>
                    <p>
                      {" "}
                      https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khttps://irsv.upmusics.com/Downloads/Musics/Sirvan%20K{" "}
                    </p>
                  </div>


                </div>


                <div className={styles.fileDate}>
                    <p>1400-08-21</p>
                  </div>

                  <div className={styles.fileType}>
                    <p>.mp3</p>
                  </div>

                  <div className={styles.fileTime}>
                    <p>4:29</p>
                  </div>



                  <div className={styles.fileActions}>
                    <img src={downloadIcon} alt="downloadIcon" />
                    <img src={wordIcon} alt="wordIcon" />
                    <img src={copyIcon} alt="copyIcon" />
                    <img src={deleteIcon} alt="deleteIcon" />

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
