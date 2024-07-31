import styles from "./archive.module.css";
import FileTypeIcon from "./FileTypeIcon";
import downloadIcon from "../assets/download Icon.png";
import copyIcon from "../assets/copy Icon.png";
import wordIcon from "../assets/Word icon.png";
import deleteIcon from "../assets/del Btn.png";

import rstyles from "./resultConverting.module.css";

import { useState } from "react";

import downloadIconHover from "../assets/download Icon hover.png";
import copyIconHover from "../assets/copy Icon hover.png";
import wordIconHover from "../assets/Word icon hover.png";
import deleteIconHover from "../assets/del Btn hover.png";

import ResultConverting from "./ResultConverting";

import Tooltip from "@mui/material/Tooltip";
import { Outlet } from "react-router-dom";

type FileType = "mic" | "upload" | "chain";

type Language = "persian" | "english";

interface Segment {
  start: string;
  end: string;
  text: string;
}

interface MyComponentProps {
  fileDescription: string | null | undefined;
  fileDate: string;
  fileType: string;
  fileTime: string;
  fileLogo: FileType;
  // fileResult: boolean;
  blueText: boolean;
  backGround: boolean;

  lang: Language;
  fileId : number;
  segments: Segment[];

  onDataUpdate: (data: boolean) => void;
}

const FileItem: React.FC<MyComponentProps> = (props) => {
  const [downloadIconImg, setDownloadIconImg] = useState(downloadIcon);
  const [wordIconImg, setWordIconImg] = useState(wordIcon);
  const [copyIconImg, setCopyIconImg] = useState(copyIcon);
  const [deleteIconImg, setDeleteIconImg] = useState(deleteIcon);

  const [deleteLoading, setDeleteLoading] = useState<boolean>(false )
  const [deleteIconSize, setDeleteIconSize] = useState("100%");

  const [fileResult, setFileResult] = useState<boolean>(false);

  const [openItem, setopenItem] = useState<number | null>(null);

  const url = `/api/requests/${props.fileId}/`
const token = "a85d08400c622b50b18b61e239b9903645297196";


  const deleteFile = async() =>{
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`,
          // 'Access-Control-Allow-Origin': '*',

        }

      }); 



      console.log("url" , url)
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(`file ${props.fileId} removed`)

    }catch(error){
      console.log(error)
    }
  }

  const toPersianNumber = (num: number | string) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num
      .toString()
      .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  const handleOpenItem = () => {
    setFileResult((prev) => !prev);
  };


  const handleDeleteClick = () =>{
    setDeleteLoading(true)
      deleteFile()

      setDeleteLoading(false)

      props.onDataUpdate(true)
      
  }

  return (
    <>
      {!fileResult ? (
        <div
          className={
            props.backGround ? styles.fileItemBackground : styles.fileItem
          }
        >
            <div className={styles.fileName}>
            <button className="buttonStyle" onClick={handleOpenItem}>
              <FileTypeIcon fileType={props.fileLogo}></FileTypeIcon>
             

              <div
                className={
                  props.blueText
                    ? styles.fileDescriptionUrl
                    : props.lang === "english"
                    ? styles.fileDescription
                    : styles.fileDescriptionRight
                  //  : styles.fileDescription
                }
              >
                <p style={{ paddingLeft: "1rem" }}>{props.fileDescription}</p>
              </div>
              </button>
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

            {/* <div style={{width:"25%", display:"flex" ,  justifyContent:"center", margin:"0 0.25rem"}}> */}
              <button className="buttonStyle">
                <img
                  src={downloadIconImg}
                  alt="Changeable"
                  onMouseOver={() => setDownloadIconImg(downloadIconHover)}
                  onMouseOut={() => setDownloadIconImg(downloadIcon)}
                />
              </button>
              {/* </div> */}
            </Tooltip>
            {/* <img src={wordIcon} alt="wordIcon" /> */}


            {/* <div style={{width:"25%", display:"flex" ,  justifyContent:"center", margin:"0 0.25rem"}}> */}
            <button className="buttonStyle">
              <img
                src={wordIconImg}
                alt="Changeable"
                onMouseOver={() => setWordIconImg(wordIconHover)}
                onMouseOut={() => setWordIconImg(wordIcon)}
              />
            </button>
            {/* <img src={copyIcon} alt="copyIcon" /> */}
{/* </div> */}

            {/* <div style={{ width:"25%",display:"flex" ,  justifyContent:"center", margin:"0 0.25rem", padding :"0 0.25rem"}}> */}
            <button className="buttonStyle">
              <img
                src={copyIconImg}
                alt="Changeable"
                onMouseOver={() => setCopyIconImg(copyIconHover)}
                onMouseOut={() => setCopyIconImg(copyIcon)}
              />
            </button>
            {/* </div> */}
            {/* <img src={deleteIcon} alt="deleteIcon" /> */}

            <button className="buttonStyle"  onClick={handleDeleteClick}  disabled={deleteLoading}>
            {/* <div style={{display:"flex", justifyContent:"center" , alignContent: "center" , paddingLeft:"1rem"}}> */}

              <img
                src={deleteIconImg}
                alt="Changeable"
                onMouseOver={() => setDeleteIconImg(deleteIconHover)
                }
                onMouseOut={() =>setDeleteIconImg(deleteIcon)      }
                // style={{width:`${deleteIconSize}`}}  
                style={{ opacity: deleteLoading ? 0.5 : 1 }}
              />
                          {/* </div> */}

            </button>
          </div>
        </div>
      ) : (
        //************************************************************************ */

        <div className={styles.fileItemSelected}>
          <div className={styles.fileItem}>
              <div className={styles.fileName}>
              <button className="buttonStyle" onClick={handleOpenItem}>

                <FileTypeIcon fileType={props.fileLogo}></FileTypeIcon>

                <div
                  className={
                    props.blueText
                      ? styles.fileDescriptionUrl
                      : props.lang === "english"
                      ? styles.fileDescription
                      : styles.fileDescriptionRight
                    //  : styles.fileDescription
                  }
                >
                  <p style={{ paddingLeft: "2rem" }}>{props.fileDescription}</p>
                </div>
                </button>
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

              <button className="buttonStyle"  onClick={handleDeleteClick}>
                <img
                  src={deleteIconImg}
                  alt="Changeable"
                  onMouseOver={() => setDeleteIconImg(deleteIconHover)}
                  onMouseOut={() => setDeleteIconImg(deleteIcon)}
                  // style={{ opacity: deleteLoading ? 0.5 : 1, }}// Change opacity based on loading state}}
                  
                />
              </button>
            </div>
          </div>

          <div className={styles.resultBody}>
            {/* <ResultConverting result="simpleResult"></ResultConverting> */}

            <div className={rstyles.resultCard}>
              <Outlet context={{ fileSegments: props.segments }}></Outlet>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileItem;
