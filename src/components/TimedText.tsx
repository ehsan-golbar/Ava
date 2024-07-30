import styles from "./resultConverting.module.css";
import textIconLight from "../assets/text icon light.png";
// import textIcon from "../assets/text icon.png";
// import timeIconLight from "../assets/time icon light.png";
import timeIcon from "../assets/time icon.png";

import refreshIcon from "../assets/Refresh.png";

import downloadIconHover from "../assets/download Icon hover.png";
import copyIconHover from "../assets/copy Icon hover.png";
import copyIcon from "../assets/copy Icon.png";
import downloadIcon from "../assets/download Icon.png";
import { useState } from "react";

import TimedTextItem from "./TimedTextItem";

import AudioPlayer from "./AudioPlayer";

import Tooltip from "@mui/material/Tooltip";
import { Link, useOutletContext } from "react-router-dom";

type Source = "convert" | "archive";
interface MyComponentProps {
  source: Source;
}

interface Segment {
  start: string;
  end: string;
  text: string;
}

interface FileContext {
  fileSegments: Segment[];
}

export default function TimedText(props: MyComponentProps) {
  const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  const [copyIconImg, setCopyIconImg] = useState(copyIcon);

  const { fileSegments } = useOutletContext<FileContext>();

  const formatDuration = (duration: string): string => {
    // Split the duration into parts based on colons
    const parts = duration.split(':');
    
    // Extract hours, minutes, and seconds
    let hours = parts.length === 3 ? parts[0] : '';  // Hours are present if there are 3 parts
    let minutes = parts.length === 3 ? parts[1] : parts[0];  // If 3 parts, minutes are in the second slot
    let seconds = parts.length === 3 ? parts[2] : parts[1];  // If 3 parts, seconds are in the third slot
  
    // Remove milliseconds from seconds
    seconds = seconds.split('.')[0];
  
    // Ensure minutes and seconds are two digits long
    if (minutes.length === 1) minutes = '0' + minutes;
    if (seconds.length === 1) seconds = '0' + seconds;
  
    // Combine hours (if present), minutes, and seconds
    if (hours !== '0') {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  return (
    <>
      <div className={styles.resultHead}>
        <div className={styles.simpletext}>
          <button className="buttonStyle">
            <Link
              to={
                props.source === "convert"
                  ? "/convert-speech/upload/simpleText"
                  : "/archive/simpleResult"
              }
              className="linkStyle"
            >
              <img src={textIconLight} alt="textIcon" />
              <p className={styles.resultHeadItem}> متن ساده </p>
            </Link>
          </button>
        </div>

        <div className={styles.timedTextSelected}>
          <button className="buttonStyle">
            <Link
              to={
                props.source === "convert"
                  ? "/convert-speech/upload/timedText"
                  : "/archive/timedResult"
              }
              className="linkStyle"
            >
              <img src={timeIcon} alt="timeIcon" />
              <p className={styles.resultHeadItemSelected}>متن زمانبندی شده</p>
            </Link>
          </button>
        </div>

        <div className={styles.resultActions}>
          <Tooltip title="۳.۱۸ مگابایت">
            <div className={styles.actionOne}>
              <button className="buttonStyle">
                <img
                  src={downloadIconImg}
                  alt="Changeable"
                  onMouseOver={() => setDownloadIconImg(downloadIconHover)}
                  onMouseOut={() => setDownloadIconImg(downloadIcon)}
                />
              </button>
            </div>
          </Tooltip>

          <div className={styles.actionTwo}>
            <button className="buttonStyle">
              <img
                src={copyIconImg}
                alt="Changeable"
                onMouseOver={() => setCopyIconImg(copyIconHover)}
                onMouseOut={() => setCopyIconImg(copyIcon)}
              />
            </button>
          </div>
          {/* <div className={styles.actionOne}> */}

          <div className={styles.startAgain}>
            <button className="buttonStyle">
              <img src={refreshIcon} alt="refreshIcon" />
              <p className={styles.refreshItem}>شروع دوباره</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.resultBody}>
        <ul className="ulStyle">
          {fileSegments.map((segment, index) => (
            <li key={index}>
              <TimedTextItem
                text={segment.text}
                timeOne={formatDuration(segment.start)}
                timeTwo={formatDuration(segment.end)}
                backGround={(index +1 ) % 2 == 0 ? true : false}
                textBlue={false}
              ></TimedTextItem>
            </li>
          ))}

          {/* <li> */}
            {/* <div className={styles.timedTextItem}>

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

             */}

            {/* <TimedTextItem
              text="[به] این [زودی] چه جوری شد [عشق]"
              timeOne="02:00"
              timeTwo="01:03"
              backGround={false}
              textBlue={false}
            ></TimedTextItem>
          </li>

          <li>
            <TimedTextItem
              text="[به] این  [عشق]"
              timeOne="02:00"
              timeTwo="01:03"
              backGround={true}
              textBlue={false}
            ></TimedTextItem>
          </li>

          <li>
            <TimedTextItem
              text="[به] این  [عشق]"
              timeOne="02:00"
              timeTwo="01:03"
              backGround={false}
              textBlue={false}
            ></TimedTextItem>
          </li>

          <li>
            <TimedTextItem
              text="[به] این  [عشق]"
              timeOne="02:00"
              timeTwo="01:03"
              backGround={true}
              textBlue={false}
            ></TimedTextItem>
          </li> */}
        </ul>
      </div>

      <div className={styles.resultFoot}>
        <AudioPlayer></AudioPlayer>
      </div>
    </>
  );
}
