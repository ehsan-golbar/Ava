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

import ResultConverting from "./ResultConverting";

import Tooltip from "@mui/material/Tooltip";

type FileType = "mic" | "upload" | "chain";

interface MyComponentProps {
  fileDescription: string;
  fileDate: string;
  fileType: string;
  fileTime: string;
  fileLogo: FileType;
  fileResult: boolean;

  backGround: boolean;
}

const FileItem: React.FC<MyComponentProps> = (props) => {
  const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  const [wordIconImg, setWordIconImg] = useState(wordIcon);
  const [copyIconImg, setCopyIconImg] = useState(copyIcon);
  const [deleteIconImg, setDeleteIconImg] = useState(deleteIcon);


  const toPersianNumber = (num: number | string) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  


  return (
    <>
      {!props.fileResult ? (
        <div
          className={
            props.backGround ? styles.fileItemBackground : styles.fileItem
          }
        >
          <div className={styles.fileName}>
            <FileTypeIcon fileType={props.fileLogo}></FileTypeIcon>

            <div className={styles.fileDescription}>
              <p>{props.fileDescription}</p>
            </div>
          </div>

          <div className={styles.fileDate}>
            <p>{toPersianNumber(props.fileDate)}</p>
          </div>

          <div className={styles.fileType}>
            <p>{props.fileType}</p>
          </div>

          <div className={styles.fileTime}>
            <p>{toPersianNumber(props.fileTime)}</p>
          </div>

          <div className={styles.fileActions}>
            {/* <img src={downloadIcon} alt="downloadIcon" /> */}

            <Tooltip title="۳.۱۸ مگابایت">
              <button className="buttonStyle">
                <img
                  src={downloadIconImg}
                  alt="Changeable"
                  onMouseOver={() => setDownloadIconImg(downloadIconHover)}
                  onMouseOut={() => setDownloadIconImg(downloadIcon)}
                />
              </button>
            </Tooltip>
            {/* <img src={wordIcon} alt="wordIcon" /> */}

            <button className="buttonStyle">
              <img
                src={wordIconImg}
                alt="Changeable"
                onMouseOver={() => setWordIconImg(wordIconHover)}
                onMouseOut={() => setWordIconImg(wordIcon)}
              />
            </button>
            {/* <img src={copyIcon} alt="copyIcon" /> */}

            <button className="buttonStyle">
              <img
                src={copyIconImg}
                alt="Changeable"
                onMouseOver={() => setCopyIconImg(copyIconHover)}
                onMouseOut={() => setCopyIconImg(copyIcon)}
              />
            </button>
            {/* <img src={deleteIcon} alt="deleteIcon" /> */}

            <button className="buttonStyle">
              <img
                src={deleteIconImg}
                alt="Changeable"
                onMouseOver={() => setDeleteIconImg(deleteIconHover)}
                onMouseOut={() => setDeleteIconImg(deleteIcon)}
              />
            </button>
          </div>
        </div>
      ) : (
        //************************************************************************ */

        <div className={styles.fileItemSelected}>
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

            <Tooltip title="۳.۱۸ مگابایت">
              <button className="buttonStyle">
                <img
                  src={downloadIconImg}
                  alt="Changeable"
                  onMouseOver={() => setDownloadIconImg(downloadIconHover)}
                  onMouseOut={() => setDownloadIconImg(downloadIcon)}
                />
              </button>
            </Tooltip>
            {/* <img src={wordIcon} alt="wordIcon" /> */}

            <button className="buttonStyle">
              <img
                src={wordIconImg}
                alt="Changeable"
                onMouseOver={() => setWordIconImg(wordIconHover)}
                onMouseOut={() => setWordIconImg(wordIcon)}
              />
            </button>
            {/* <img src={copyIcon} alt="copyIcon" /> */}

            <button className="buttonStyle">
              <img
                src={copyIconImg}
                alt="Changeable"
                onMouseOver={() => setCopyIconImg(copyIconHover)}
                onMouseOut={() => setCopyIconImg(copyIcon)}
              />
            </button>
            {/* <img src={deleteIcon} alt="deleteIcon" /> */}

            <button className="buttonStyle">
              <img
                src={deleteIconImg}
                alt="Changeable"
                onMouseOver={() => setDeleteIconImg(deleteIconHover)}
                onMouseOut={() => setDeleteIconImg(deleteIcon)}
              />
            </button>
          </div>  
          </div>

          <div className={styles.resultBody}>
            <ResultConverting result="simpleResult"></ResultConverting>
          </div>
        </div>
      )}
    </>
  );
};

export default FileItem;
