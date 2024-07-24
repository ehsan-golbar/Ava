
import styles from "./archive.module.css";
import FileTypeIcon from "./FileTypeIcon";
import downloadIcon from "../assets/download Icon.png";
import copyIcon from "../assets/copy Icon.png";
import wordIcon from "../assets/Word icon.png";
import deleteIcon from "../assets/del Btn.png";


interface MyComponentProps{
    fileDescription : string;
    fileDate : string;
    fileType : string;
    fileTime : string;
}

const FileItem : React.FC< MyComponentProps> = (props) => {

        return(

            <>
                          <div className={styles.fileItem}>
                <div className={styles.fileName}>
                  <FileTypeIcon fileType="chain"></FileTypeIcon>

                  <div className={styles.fileDescription}>
                    <p>

                     {props.fileDescription}
                    </p>
                  </div>
                </div>

                <div className={styles.fileDate}>
                  <p>{props.fileDate}</p>
                </div>

                <div className={styles.fileType}>
                  <p>{props.fileType}</p>
                </div>

                <div className={styles.fileTime}>
                  <p>{props.fileTime}</p>
                </div>

                <div className={styles.fileActions}>
                  <img src={downloadIcon} alt="downloadIcon" />
                  <img src={wordIcon} alt="wordIcon" />
                  <img src={copyIcon} alt="copyIcon" />
                  <img src={deleteIcon} alt="deleteIcon" />
                </div>
              </div>
            </>
        )
}


export default FileItem;