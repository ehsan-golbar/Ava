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


import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";


const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#FFFFFF', // Text color of the selected page
            backgroundColor: '#07B49B', // Background color of the selected page

          },
          '&.MuiPaginationItem-root': {
            fontFamily: 'IRANSansXFaNum',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '1px',
            textAlign: 'center',
          },
        },
      },
    },
  },
});


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
                fileLogo="chain"

                fileResult={false}
                blueText={true}
                backGround={false}
              ></FileItem>
            </li>


            <li>
              <FileItem
                fileDescription="پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش"
                fileDate="1400-08-21"
                fileType=".mp3"
                fileTime="4:29"
                fileLogo="mic"
                fileResult={false}
                backGround={true}
                blueText={false}

              ></FileItem>
            </li>




            <li>
              <FileItem
                fileDescription="khaterate To"
                fileDate="1400-08-21"
                fileType=".mp3"
                fileTime="4:29"
                fileLogo="upload"
                fileResult={true}
                blueText={false}

                backGround={false}

              ></FileItem>
            </li>


          </ul>
        </div>
      </div>
      <div className={styles.pagination}>


        <ThemeProvider theme={theme}>
        <Pagination
          count={356}
          defaultPage={1}
          siblingCount={1}
          boundaryCount={1}
          // color="primary"
          // color=""

        ></Pagination>


</ThemeProvider>
        {/* <PaginationItem MuiPaginationItem-icon = {styles.a} disabled ></PaginationItem> */}
      </div>
    </>
  );
}
