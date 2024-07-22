
import styles from "./sidebar.module.css"
import avaIcon from '../assets/avaIcon.png'; 
import speechIcon from '../assets/speechIcon.png'; 
import archiveIcon from '../assets/archive Icon.png'; 

export default function Sidebar() {
    return (
        <>
            <nav className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    
                    <img className={styles.sidebarHeadItem} src={avaIcon} alt="avaIcon" />
                    
                  
                    <p className={styles.sidebarHeadItem} >آوا</p>
                   
                    
                </div>
                <div className={styles.sidebarPages}>
                   
                        <div className={styles.pagesItem}>

                        <img className={styles.pagesItemRight} src={speechIcon} alt="speechIcon" />
                        <p className={styles.pagesItemLeft}>تبدیل گفتار</p>
                        </div>
                       
                        <div className={styles.pagesItem}>
                        <img src={archiveIcon} alt="archiveIcon" />
                        <p>آرشیو</p>
                        </div>
                  
                </div>

            </nav>

        </>
    )
}