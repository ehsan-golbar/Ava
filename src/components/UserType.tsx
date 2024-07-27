import styles from "./speech.module.css";
import dropIcon from "../assets/drop Icon.png";
import userIcon from "../assets/user Icon.png";

import logoutIcon from "../assets/logout.png"





export default function UserType() {


  
  return (
    <>
      <div className={styles.speechHead}>
        <div className={styles.userType}>
          


       


          <div className={styles.userTypeOne} style={{borderBottom:"0.6px solid #00BA9F"}}>
          <img src={userIcon} alt="userIcon" />
            <p className={styles.userTypeItem}>مهمان</p>

            <button className="buttonStyle" style={{marginRight:'0.25rem'}}>
              <img
                style={{ width: "fit-content", transform: "scaleY(-1)" }}
                src={dropIcon}
                alt="dropIcon"
              />
            </button>



          </div>

          
          <div className={styles.userTypeOne}>
          
          <button className="buttonStyle">
          <img style={{paddingRight: "0.1rem", paddingLeft: "0.1rem"}} src={logoutIcon} alt="logoutIcon" />
            <p className={styles.userTypeItem}>خروج</p>
            </button>
          </div>
          
        </div>
      </div>


    <br />
          
      <div className={styles.speechHead}>
        <div className={styles.userType}>
          <div className={styles.userTypeOne}>
          <img src={userIcon} alt="userIcon" />
          <p className={styles.userTypeItem}>مهمان</p>

          <button className="buttonStyle">
            <img
              style={{ width: "fit-content" }}
              src={dropIcon}
              alt="dropIcon"
            />
          </button>

          </div>
        </div>
      </div>
    </>
  );
}
