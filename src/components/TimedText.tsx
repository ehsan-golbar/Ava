import styles from "./resultConverting.module.css";
import textIconLight from "../assets/text icon light.png";
import textIcon from "../assets/text icon.png";
import timeIconLight from "../assets/time icon light.png";
import timeIcon from "../assets/time icon.png";

import refreshIcon from "../assets/Refresh.png";

import downloadIconHover from "../assets/download Icon hover.png";
import copyIconHover from "../assets/copy Icon hover.png";
import copyIcon from "../assets/copy Icon.png";
import downloadIcon from "../assets/download Icon.png";
import { useState } from "react";


import AudioPlayer from "./AudioPlayer"

export default function TimedText() {
  const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  const [copyIconImg, setCopyIconImg] = useState(copyIcon);

  return (
    <>
      <div className={styles.resultHead}>
        <div className={styles.simpletext}>
          <img src={textIconLight} alt="textIcon" />
          <p className={styles.resultHeadItem}> متن ساده </p>
        </div>

        <div className={styles.timedTextSelected}>
          <img src={timeIcon} alt="timeIcon" />
          <p className={styles.resultHeadItemSelected}>متن زمانبندی شده</p>
        </div>

        <div className={styles.resultActions}>
          <button className="buttonStyle">
            <img
              src={downloadIconImg}
              alt="Changeable"
              onMouseOver={() => setDownloadIconImg(downloadIconHover)}
              onMouseOut={() => setDownloadIconImg(downloadIcon)}
            />
          </button>

          <button className="buttonStyle">
            <img
              src={copyIconImg}
              alt="Changeable"
              onMouseOver={() => setCopyIconImg(copyIconHover)}
              onMouseOut={() => setCopyIconImg(copyIcon)}
            />
          </button>

          <button className="buttonStyle">
            <div className={styles.startAgain}>
              <img src={refreshIcon} alt="refreshIcon" />
              <p className={styles.refreshItem}>شروع دوباره</p>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.resultBody}>
        <ul className="ulStyle">
          <li>
            <div className={styles.timedTextItemSelected}>

                <div className={styles.timedTextItemOne}>
              <p className="pStyle">00:03</p>

              </div>


              <div className={styles.timedTextItemTwo}>
              <p className="pStyle">00:00</p>
              </div>
              <div className={styles.timedTextItemThree}>
              <p className="pStyle">[با]</p>

              </div>
            </div>
           
          </li>


          <li>
            <div className={styles.timedTextItem}>

                <div className={styles.timedTextItemOne}>
              <p className="pStyle">01:03</p>

              </div>


              <div className={styles.timedTextItemTwo}>
              <p className="pStyle">02:00</p>
              </div>
              <div className={styles.timedTextItemThree}>
              <p className="pStyle">[به] این [زودی] چه جوری شد [عشق]</p>

              </div>
            </div>
           
          </li>


        </ul>
      </div>


      
      <div className={styles.resultFoot}>
          <AudioPlayer></AudioPlayer>
        </div> 
    </>
  );
}
