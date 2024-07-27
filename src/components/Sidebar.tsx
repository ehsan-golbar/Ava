import styles from "./sidebar.module.css";
import avaIcon from "../assets/avaIcon.png";
import speechIcon from "../assets/speechIcon.png";
import archiveIcon from "../assets/archive Icon.png";
import "../App.css";

export default function Sidebar() {
  return (
    <>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <img className={styles.sidebarHeadItem} src={avaIcon} alt="avaIcon" />

          <p className={styles.sidebarHeadItem}>آوا</p>
        </div>
        <div className={styles.sidebarPages}>
          {/* <a className="aStyle" href="#"> */}
          
            {/* <div className={styles.pagesItem}> */}
            <div className={styles.pagesItemSelected}>
              <button className="buttonStyle">
              <img
                className={styles.pagesItemRight}
                src={speechIcon}
                alt="speechIcon"
              />
              <p className={styles.pagesItemLeft}>تبدیل گفتار</p>
              </button>
            </div>
          {/* </a> */}

          {/* <a href="#" className="aStyle"> */}
            <div className={styles.pagesItem}>
              <button className="buttonStyle">
              <img className={styles.pagesItemRight} src={archiveIcon} alt="archiveIcon" />
              <p className={styles.pagesItemLeft}>آرشیو</p>
              </button>
            </div>
          {/* </a> */}
        </div>
      </nav>
    </>
  );
}
