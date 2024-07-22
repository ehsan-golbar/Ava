import userIcon from "../assets/user Icon.png"
import styles from "./speech.module.css"
import dropIcon from "../assets/drop Icon.png"
import "../App.css"
export default function ConvertSpeech() {
    return (
        <>
        <div className={styles.userType}>
            <button className="buttonStyle">
            <img style={{width: 'fit-content'}} src= {dropIcon} alt="dropIcon" />
            </button>
            <p style={{height: 'fit-content', color:'#00BA9F'}}>مهمان</p>
            
            <img src={userIcon} alt="userIcon" />
            
        </div>
        <p>Speech</p>
        </>
    )
}