import styles from "./archive.module.css";
import "../App.css";

import { Pagination } from "@mui/material";



// import downloadIcon from "../assets/download Icon.png";
// import copyIcon from "../assets/copy Icon.png";
// import wordIcon from "../assets/Word icon.png";
// import deleteIcon from "../assets/del Btn.png";

// import littleChain from "../assets/little chain Icon.png";
// import FileTypeIcon from "./FileTypeIcon";

import FileItem from "./FileItem";
export default function Archive() {
  return (
    <>
      <div className={styles.archive}>
        <div className={styles.archiveHead}>
          <p> آرشیو من</p>
        </div>

        <div className={styles.archiveFiles}>
          <div className={styles.fileItems}>
            <div style={{ width: "50%" }}>
              <p className={styles.fileItemsTitle}>نام فایل</p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>تاریخ بارگذاری</p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>نوع فایل </p>
            </div>

            <div style={{ width: "10%" }}>
              <p className={styles.fileItemsTitle}>مدت زمان </p>
            </div>
          </div>
          <ul className="ulStyle">
            <li>
              <FileItem
                fileDescription="https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khttps://irsv.upmusics.com/Downloads/Musics/Sirvan%20K"
                fileDate="1400-08-21"
                fileType=".mp3"
                fileTime="4:29"
              ></FileItem>
            </li>

            <li>
              <div className={styles.fileItem}>
                <p>two</p>
              </div>
            </li>

            <li>
              <div className={styles.fileItem}>
                <p>three</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={356}
          defaultPage={122}
          siblingCount={1}
          boundaryCount={1}
        ></Pagination>
        {/* <PaginationItem MuiPaginationItem-icon = {styles.a} disabled ></PaginationItem> */}
      </div>
    </>
  );
}
