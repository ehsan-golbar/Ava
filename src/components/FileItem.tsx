import styles from "./archive.module.css";
import FileTypeIcon from "./FileTypeIcon";
import downloadIcon from "../assets/download Icon.png";
import copyIcon from "../assets/copy Icon.png";
import wordIcon from "../assets/Word icon.png";
import deleteIcon from "../assets/del Btn.png";

import { useState } from "react";

import downloadIconHover from "../assets/download Icon hover.png";
import copyIconHover from "../assets/copy Icon hover.png";
import wordIconHover from "../assets/Word icon hover.png";
import deleteIconHover from "../assets/del Btn hover.png";



type FileType = "mic" | "upload" | "chain";



interface MyComponentProps {
  fileDescription: string;
  fileDate: string;
  fileType: string;
  fileTime: string;
  fileLogo : FileType;
}

const FileItem: React.FC<MyComponentProps> = (props) => {
  const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  const [wordIconImg, setWordIconImg] = useState(wordIcon);
  const [copyIconImg, setCopyIconImg] = useState(copyIcon);
  const [deleteIconImg, setDeleteIconImg] = useState(deleteIcon);

  return (
    <>
      <div className={styles.fileItem}>
        <div className={styles.fileName}>
          <FileTypeIcon fileType={props.fileLogo}></FileTypeIcon>

          <div className={styles.fileDescription}>
            <p>{props.fileDescription}</p>
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
          {/* <img src={downloadIcon} alt="downloadIcon" /> */}


          <img
            src={downloadIconImg}
            alt="Changeable"
            onMouseOver={() => setDownloadIconImg(downloadIconHover)}
            onMouseOut={() => setDownloadIconImg(downloadIcon)}
          />
          {/* <img src={wordIcon} alt="wordIcon" /> */}
          <img
            src={wordIconImg}
            alt="Changeable"
            onMouseOver={() => setWordIconImg(wordIconHover)}
            onMouseOut={() => setWordIconImg(wordIcon)}
          />
          {/* <img src={copyIcon} alt="copyIcon" /> */}
          <img
            src={copyIconImg}
            alt="Changeable"
            onMouseOver={() => setCopyIconImg(copyIconHover)}
            onMouseOut={() => setCopyIconImg(copyIcon)}
          />
          {/* <img src={deleteIcon} alt="deleteIcon" /> */}
          <img
            src={deleteIconImg}
            alt="Changeable"
            onMouseOver={() => setDeleteIconImg(deleteIconHover)}
            onMouseOut={() => setDeleteIconImg(deleteIcon)}

           
          />
        </div>
      </div>
    </>
  );
};

export default FileItem;
