import styles from "./resultConverting.module.css";
// import copyIcon from "../assets/copy Icon.png";
// import downloadIcon from "../assets/download Icon.png";
// import textIconLight from "../assets/text icon light.png";
// import textIcon from "../assets/text icon.png";
// import timeIconLight from "../assets/time icon light.png";

// import refreshIcon from "../assets/Refresh.png";

// import downloadIconHover from "../assets/download Icon hover.png";
// import copyIconHover from "../assets/copy Icon hover.png";
// import { useState } from "react";


import SimpleText from "./SimpleText"
import TimedText from "./TimedText";





type ResultState = 'simpleResult' | "timedResult"


interface MyComponentProps{
  result : ResultState;
}



export default function ResultConverting(props : MyComponentProps) {
  // const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  // const [copyIconImg, setCopyIconImg] = useState(copyIcon);

  return (
    <>




      <div className={styles.resultCard}>
        {/* <div className={styles.resultHead}>
          <div className={styles.simpletext}>

            
           
            <img src={textIcon} alt="textIcon" />
            <p className={styles.resultHeadItemSelected}> متن ساده </p>
          </div>

          <div className={styles.timedText}>
            <img src={timeIconLight} alt="timeIcon" />
            <p className={styles.resultHeadItem}>متن زمانبندی شده</p>
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
        </div> */}




        {/* <SimpleText></SimpleText> */}

        { props.result === 'simpleResult' ?
    <SimpleText></SimpleText>
    
    
    : 

    
    <TimedText></TimedText>
    }
            




      </div>
    </>
  );
}
