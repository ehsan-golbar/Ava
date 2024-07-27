import styles from "./resultConverting.module.css" 
import textIconLight from "../assets/text icon light.png";
import textIcon from "../assets/text icon.png";
import timeIconLight from "../assets/time icon light.png";

import refreshIcon from "../assets/Refresh.png";

import downloadIconHover from "../assets/download Icon hover.png";
import copyIconHover from "../assets/copy Icon hover.png";
import copyIcon from "../assets/copy Icon.png";
import downloadIcon from "../assets/download Icon.png";
import { useState } from "react";


import AudioPlayer from "./AudioPlayer"
import Tooltip from "@mui/material/Tooltip";


export default function SimpleText() {
    const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
    const [copyIconImg, setCopyIconImg] = useState(copyIcon);

    return(
<>





<div className={styles.resultHead}>
          <div className={styles.simpletextSelected}>

            
          <button className="buttonStyle">
            <img src={textIcon} alt="textIcon" />
            <p className={styles.resultHeadItemSelected}> متن ساده </p>
            </button>
          </div>

          <div className={styles.timedText}>
          <button className="buttonStyle">
            <img src={timeIconLight} alt="timeIcon" />
            <p className={styles.resultHeadItem}>متن زمانبندی شده</p>
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


            <div className={styles.actionOne}>

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
            {/* </div> */}

          </div>
        </div>

<div className={styles.resultBody}>
          <p className={styles.bodyText}>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>
          <p className={styles.bodyText}>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>
          <p className={styles.bodyText}>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>

          <p className={styles.bodyText}>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>
        </div>



        <div className={styles.resultFoot}>
         <AudioPlayer></AudioPlayer>
        </div>
</>

    )
    
}