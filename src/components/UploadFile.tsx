// import micIconWhite from "../assets/mic Icon white.png";
import styles from "./speech.module.css";
import chainicon from "../assets/chain Icon.png";
import uploadIconWhite from "../assets/upload Icon white.png";
import bigUploadIcon from "../assets/big upload Icon.png";
// import dropIcon from "../assets/drop Icon.png";
import micIcon from "../assets/mic Icon.png";
import rstyles from "./resultConverting.module.css";

import ResultConverting from "./ResultConverting";

import SpeechCardFoot from "./SpeechCardFoot";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import SimpleText from "./SimpleText";
import TimedText from "./TimedText";
import { useState } from "react";

import { DataProvider } from './DataContext';

type UploadState = "upload" | "simpleResult" | "timedResult";

interface MyComponentProps {
  state: UploadState;
}

export default function UploadFile(props: MyComponentProps) {




  const [language, setLanguage] = useState<string | null>(null);


  
  if (props.state === "upload") {
    return (
      <>
        <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            {/* <div className={styles.cardHeadItemOne}> */}
            <div className={styles.cardHeadItems}>
              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/record" className="linkStyle">
                    {/* <img src={micIconWhite} alt="micIcon" /> */}
                    <img src={micIcon} alt="micIcon" />
                    <p>ضبط صدا</p>
                  </Link>
                </button>
              </div>

              <div className={styles.cardHeadItemTwo}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/upload" className="linkStyle">
                    <img src={uploadIconWhite} alt="uploadIcon" />
                    <p>بارگذاری فایل</p>
                  </Link>
                </button>
              </div>

              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/link" className="linkStyle">
                    <img src={chainicon} alt="chainIcon" />

                    <p>لینک</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.cardBodyUpload}>
            <div className={styles.bodyDescriptionUpload}>
              <button className="buttonStyle">
                <div className={styles.uploadLogo}>
                  <img src={bigUploadIcon} alt="bigUploadIcon" />
                </div>
              </button>
              <p className={styles.uploadDescription}>
                برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید متن
                پیاده شده آن، در اینجا ظاهر می شود
              </p>
            </div>
          </div>
          {/* 
            <div className={styles.cardFoot}>
              <p className={styles.footTitle}>زبان گفتار:</p>
    
              <div className={styles.langType}>
                <p className={styles.footItem}>فارسی</p>
    
                <button className="buttonStyle">
                  <img src={dropIcon} alt="dropIcon" />
                </button>
              </div>
            </div> */}

          <SpeechCardFoot ></SpeechCardFoot>
        </div>
      </>
    );
    // break;
  } else if (props.state === "simpleResult" || props.state === "timedResult") {
    return (
      <>
        <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            <div className={styles.cardHeadItems}>
              {/* <div className={styles.cardHeadItemOne}> */}

              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/record" className="linkStyle">
                    {/* <img src={micIconWhite} alt="micIcon" /> */}
                    <img src={micIcon} alt="micIcon" />
                    <p>ضبط صدا</p>
                  </Link>
                </button>
              </div>

              <div className={styles.cardHeadItemTwo}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/upload" className="linkStyle">
                    <img src={uploadIconWhite} alt="uploadIcon" />
                    <p>بارگذاری فایل</p>
                  </Link>
                </button>
              </div>

              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <Link to="/convert-speech/link" className="linkStyle">
                    <img src={chainicon} alt="chainIcon" />

                    <p>لینک</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.cardBodyUpload}>
            {/* <ResultConverting
              result={
                props.state === "timedResult" ? "timedResult" : "simpleResult"
              }
            ></ResultConverting> */}
            <div className={rstyles.resultCard}>
              {/* <Routes> */}
                {/* <Route  path="" element = {<ResultConverting
              result={
                props.state === "timedResult" ? "timedResult" : "simpleResult"
              }
            ></ResultConverting>}></Route> */}
{/* 
                <Route
                  path="simpleText"
                  element={<SimpleText></SimpleText>}
                ></Route>
                <Route index element={<TimedText></TimedText>}></Route>
                <Route path="timedText" element={<TimedText></TimedText>}></Route>
              </Routes> */}

              <Outlet context={{fileSegments : []}}></Outlet>
            </div>
          </div>

          {/* <DataProvider> */}
          <SpeechCardFoot></SpeechCardFoot>
          {/* </DataProvider> */}

        </div>
      </>
    );
  } else {
    return (
      <>
        <div>error</div>
      </>
    );
  }
}
