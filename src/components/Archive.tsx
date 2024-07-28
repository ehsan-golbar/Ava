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
import { useState } from "react";


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

type FileType = "mic" | "upload" | "chain";


interface FileDetails {
  fileDescription: string;
  fileDate: string;
  fileType: string;
  fileTime: string;
  fileLogo: FileType;
}   

const files: FileDetails[] = [
  {
    fileDescription: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K",
    fileDate: "1400-08-21",
    fileType: ".mp3",
    fileTime: "4:29",
    fileLogo: "chain"
  },
  {                fileDescription:"پادکست رادیو راه - فصل دوم -قسمت ششم- راه سروش",
    fileDate:"1400-08-21",
    fileType:".mp3",
    fileTime:"4:29",
    fileLogo:"mic"},


    {
      fileDescription:"khaterate To",
      fileDate:"1400-08-21",
      fileType:".mp3",
      fileTime:"4:29",
      fileLogo:"upload"
    }
    ,
  {
    fileDescription: "https://example.com/path/to/another/music",
    fileDate: "1400-09-01",
    fileType: ".mp3",
    fileTime: "3:45",
    fileLogo: "chain"
  },


  {
    fileDescription:"khaterate To",
    fileDate:"1400-08-21",
    fileType:".mp3",
    fileTime:"4:29",
    fileLogo:"upload"
  }
  // Add more objects as needed
];





export default function Archive() {


  const [page, setPage] = useState<number>(1);

  const[openItem, setopenItem] = useState<number | null>(null);

  // Total number of pages (could be dynamic based on data)
  const totalPages : number = 10;
  // const lastPageSel : number = 1 ;
  // Handler for page change event

  const handleOpenItem  =(index:number) =>{
      if (index === openItem){
          setopenItem(null);
      }else{
        setopenItem(index)
      }
  }
  const handlePageChange = (event: React.ChangeEvent<unknown>, value : number) => {
    setPage(value);

    // Fetch new data based on the new page, if necessary
  };

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get only the items for the current page
  const currentFiles = files.slice(startIndex, endIndex);

  
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


          {currentFiles.map((file, index) => (

        <li key={index}>
            <button className="buttonStyle"   onClick={() => handleOpenItem(startIndex + index)}>
              <FileItem
                fileDescription={file.fileDescription}
                fileDate={file.fileDate}
                fileType={file.fileType}
                fileTime={file.fileTime}
                fileLogo={file.fileLogo}

                fileResult={(startIndex + index) === openItem ? true : false}
                blueText={file.fileLogo === 'chain' ? true : false}
                backGround={(index + 1) % 2 == 0 ? true : false}
              ></FileItem>

</button>
        </li>
      ))}
      
 

            {/* <li>
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
            </li> */}


          </ul>
        </div>
      </div>
      <div className={styles.pagination}>


        <ThemeProvider theme={theme}>
        <Pagination
          count={totalPages}
          defaultPage={1}
          siblingCount={1}
          boundaryCount={1}
          page={page}
          onChange={handlePageChange}
          // color="primary"
          // color=""

        ></Pagination>
{/* 
        <p>{page}</p> */}


</ThemeProvider>
        {/* <PaginationItem MuiPaginationItem-icon = {styles.a} disabled ></PaginationItem> */}
      </div>
    </>
  );
}
