import styles from "./resultConverting.module.css";
import copyIcon from "../assets/copy Icon.png";
import downloadIcon from "../assets/download Icon.png";
import textIconLight from "../assets/text icon light.png";
import timeIconLight from "../assets/time icon light.png";

import refreshIcon from "../assets/Refresh.png"





export default function ResultConverting() {









  return (
    <>
      <div className={styles.resultCard}>
        <div className={styles.resultHead}>
          <div className={styles.simpletext}>
            <img src={textIconLight} alt="textIcon" />
            <p className={styles.resultHeadItem}> متن ساده </p>
          </div>

          <div className={styles.timedText}>
            <img src={timeIconLight} alt="timeIcon" />
            <p className={styles.resultHeadItem}>متن زمانبندی شده</p>
          </div>

          <div className={styles.resultActions}>
            <img src={downloadIcon} alt="downoadIcon" />
            <img src={copyIcon} alt="copyIcon" />
            <div className={styles.startAgain}>

                <img src={refreshIcon} alt="refreshIcon" />
              <p className={styles.refreshItem}>شروع دوباره</p>
            </div>
          </div>
        </div>

        <div className={styles.resultBody}>
          <p>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>
          <p>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>
          <p>
            [با][---][---] [با] و[---][---] [با][---][---][---][---] کجایی تو
            [خوش] می دیدی من خسته شدم [ما را] [به] این [زودی] چه جوری شد [عشق
            شدی] به این است[---] [آخرش] سی با فکر [و] چقدر [نزار می خوام] که
            [چشم تو] [و با رفت][---][---][---][---][---][---][---][---] سخت
            [آرام] ولی ازت می خوام[---] بر نگردی هر کسی که به [تو] باشه[---]
            کاشکی تو منو [بردی] [که چشمک][---] با[---][---][---][---][---]
            [ابو][---] [با] و و و و و [او]
          </p>

          <p>
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

                <p>hee</p>
        </div>



      </div>
    </>
  );
}
