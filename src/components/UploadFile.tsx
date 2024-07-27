// import micIconWhite from "../assets/mic Icon white.png";
import styles from "./speech.module.css";
import chainicon from "../assets/chain Icon.png";
import uploadIconWhite from "../assets/upload Icon white.png";
import bigUploadIcon from "../assets/big upload Icon.png";
// import dropIcon from "../assets/drop Icon.png";
import micIcon from "../assets/mic Icon.png";

import ResultConverting from "./ResultConverting";

import SpeechCardFoot from "./SpeechCardFoot";

type UploadState = "upload" | "simpleResult" | "timedResult";

interface MyComponentProps {
  state: UploadState;
}

export default function UploadFile(props: MyComponentProps) {
  if (props.state === "upload") {
    return (
      <>
        <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            {/* <div className={styles.cardHeadItemOne}> */}
            <div className={styles.cardHeadItems}>
              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  {/* <img src={micIconWhite} alt="micIcon" /> */}
                  <img src={micIcon} alt="micIcon" />
                  <p>ضبط صدا</p>
                </button>
              </div>

              <div className={styles.cardHeadItemTwo}>
                <button className="buttonStyle">
                  <img src={uploadIconWhite} alt="uploadIcon" />
                  <p>بارگذاری فایل</p>
                </button>
              </div>

              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <img src={chainicon} alt="chainIcon" />

                  <p>لینک</p>
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

          <SpeechCardFoot></SpeechCardFoot>
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
                  {/* <img src={micIconWhite} alt="micIcon" /> */}
                  <img src={micIcon} alt="micIcon" />
                  <p>ضبط صدا</p>
                </button>
              </div>

              <div className={styles.cardHeadItemTwo}>
                <button className="buttonStyle">
                  <img src={uploadIconWhite} alt="uploadIcon" />
                  <p>بارگذاری فایل</p>
                </button>
              </div>

              <div className={styles.cardHeadItem}>
                <button className="buttonStyle">
                  <img src={chainicon} alt="chainIcon" />

                  <p>لینک</p>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.cardBodyUpload}>
            <ResultConverting
              result={
                props.state === "timedResult" ? "timedResult" : "simpleResult"
              }
            ></ResultConverting>

            {/* <div className={styles.bodyDescriptionUpload}>
                  <button className="buttonStyle">
                    <div className={styles.uploadLogo}>
                      <img src={bigUploadIcon} alt="micIcon" />
                    </div>
                  </button>
                  <p className={styles.uploadDescription}>
                    برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید متن
                    پیاده شده آن، در اینجا ظاهر می شود
                  </p>
                </div> */}
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

          <SpeechCardFoot></SpeechCardFoot>
        </div>
      </>
    );
    // break;

    // case 'simpleResult':
    //   return (
    //     <>
    //       <div className={styles.speechCard}>
    //         <div className={styles.cardHead}>
    //           {/* <div className={styles.cardHeadItemOne}> */}
    //           <button className="buttonStyle">

    //           <div className={styles.cardHeadItem}>
    //             {/* <img src={micIconWhite} alt="micIcon" /> */}
    //             <img src={micIcon} alt="micIcon" />
    //             <p>ضبط صدا</p>
    //           </div>
    //           </button>
    //           <button className="buttonStyle">

    //           <div className={styles.cardHeadItemTwo}>
    //             <img src={uploadIconWhite} alt="uploadIcon" />
    //             <p>بارگذاری فایل</p>
    //           </div>
    //           </button>
    //           <button className="buttonStyle">

    //           <div className={styles.cardHeadItem}>
    //             <img src={chainicon} alt="chainIcon" />

    //             <p>لینک</p>
    //           </div>
    //           </button>
    //         </div>

    //         <div className={styles.cardBodyUpload}>

    //           <ResultConverting result="simpleResult"></ResultConverting>

    //           {/* <div className={styles.bodyDescriptionUpload}>
    //             <button className="buttonStyle">
    //               <div className={styles.uploadLogo}>
    //                 <img src={bigUploadIcon} alt="micIcon" />
    //               </div>
    //             </button>
    //             <p className={styles.uploadDescription}>
    //               برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید متن
    //               پیاده شده آن، در اینجا ظاهر می شود
    //             </p>
    //           </div> */}
    //         </div>
    // {/*
    //         <div className={styles.cardFoot}>
    //           <p className={styles.footTitle}>زبان گفتار:</p>

    //           <div className={styles.langType}>
    //             <p className={styles.footItem}>فارسی</p>

    //             <button className="buttonStyle">
    //               <img src={dropIcon} alt="dropIcon" />
    //             </button>
    //           </div>
    //         </div> */}

    //        <SpeechCardFoot></SpeechCardFoot>
    //       </div>
    //     </>
    //   );
    // break;
    // default:
    //   break;
  } else {
    return (
      <>
        <div>error</div>
      </>
    );
  }
}
