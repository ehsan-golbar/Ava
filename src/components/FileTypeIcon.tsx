import styles from "./archive.module.css"
import littleChain from "../assets/little chain Icon.png";

import littleUpload from "../assets/little upload Icon.png"

import littleMic from "../assets/little mic Icon.png"



export default function FileTypeIcon() {
     return(

        <>
        
        
                <div className={styles.chainLogo}>
                    <img src={littleChain} alt="typeLogo" />
                </div>

                <div className={styles.micLogo}>
                    <img src={littleMic} alt="littleMic" />
                </div>


                <div className={styles.uploadLogo}>
                    <img src={littleUpload} alt="littleUpload" />
                </div>


        </>
     )
}
