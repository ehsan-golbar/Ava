import userIcon from "../assets/user Icon.png"
import styles from "./speech.module.css"
import dropIcon from "../assets/drop Icon.png"
import "../App.css"
export default function ConvertSpeech() {
    return (
        <>
            <div className={styles.speechBody}>
                <div className={styles.speechHead}>
                    
                    <div className={styles.userType}>
                        <button className="buttonStyle">
                            <img style={{ width: 'fit-content' }} src={dropIcon} alt="dropIcon" />
                        </button>
                        <p style={{ height: 'fit-content', color: '#00BA9F' }}>مهمان</p>

                        <img src={userIcon} alt="userIcon" />

                    </div>

                
                </div>
                <div className={styles.speechOverview}>
                    <p className={styles.speechTitle}>تبدیل گفتار به متن</p>
                    <p className={styles.speechDetails}>آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را یادگرفته است و میتواند متن صحبت هار را بنویسد.</p>
                </div>

                <div className={styles.speechCard}>

                    <div className={styles.cardHead}>

                        <div className={styles.cardHeadItemOne}>
                            <p>ضبط صدا</p>
                        </div>


                        <div className={styles.cardHeadItemTwo}>
                            <p>بارگذاری فایل</p>
                        </div>



                        <div className={styles.cardHeadItemThree}>
                            <p>لینک</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}