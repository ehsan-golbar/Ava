// import micIconWhite from "../assets/mic Icon white.png";
import styles from "./speech.module.css";
import chainiconWhite from "../assets/chain Icon white.png";
// import uploadIconWhite from "../assets/upload Icon white.png";
// import bigUploadIcon from "../assets/big upload Icon.png";
// import dropIcon from "../assets/drop Icon.png";
import micIcon from "../assets/mic Icon.png";
import littleChainIcon from "../assets/little chain Icon.png"

import uploadIcon from "../assets/upload Icon.png";

import SpeechCardFoot from "./SpeechCardFoot";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { FileData, useFileFetch } from './FileFetchContext';

import rstyles from "./resultConverting.module.css";


export default function LinkFile() {


  const [fileUrl, setFileUrl] = useState<string  > ("")

  const { fetchFile } = useFileFetch();


const[ showResult , setShowResult] = useState<boolean>(false)


const [selectedFile, setSelectedFile] = useState<FileData>()

  const url = "/api/requests/";
  const token = "a85d08400c622b50b18b61e239b9903645297196";


  
   
  
  useEffect(()=>{
    // const fetchRequest = async () => {
    //   try {
    //     const response = await fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': `Token ${token}`,
    //         // 'Access-Control-Allow-Origin': '*',
  
    //       }
    //     }); 
  
  
    //     console.log('Response status:', response.status);
    //     console.log('Response headers:', response.headers);
    
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
  
  
    //     const data = await response.json();
    //     // setFetchFile(data.results)
    //     console.log('Response data:', data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }
    
    // // Call the function
    // fetchRequest();

    console.log("link data " , fetchFile)
  },[])


  const handleChainButoonClick = () => {
    const item = fetchFile.find((item) => item.url === fileUrl);

    console.log( "item Id : "  , item?.id)

    setSelectedFile(item)
    setShowResult(true)

  }
  
  
    return(
        <>
         <div className={styles.speechCard}>
          <div className={styles.cardHead}>
            {/* <div className={styles.cardHeadItemOne}> */}
              <div className={styles.cardHeadItems}>
           

            <div className={styles.cardHeadItem}>
            <button className="buttonStyle">

            <Link to="/convert-speech/record" className="linkStyle">
              {/* <img src={micIconWhite} alt="micIcon" /> */}
              <img src={micIcon} alt="micIcon" />
              <p>ضبط صدا</p>

              </Link>
              </button>
            </div>
        

           


            <div className={styles.cardHeadItem}>
            <button className="buttonStyle">

            <Link to="/convert-speech/upload" className="linkStyle">
              <img src={uploadIcon} alt="uploadIcon" />
              <p>بارگذاری فایل</p>
              </Link>
              </button>
            </div>

            



            <div className={styles.cardHeadItemThree}>
              
            <button className="buttonStyle">
            <Link to="/convert-speech/link" className="linkStyle">
              <img src={chainiconWhite} alt="chainIcon" />

              <p>لینک</p>

              </Link>
              
            </button>
            </div>

            </div>
          </div>

          <div className={styles.cardBodyLink}>


            {!showResult ?
              <div className={styles.bodyDescriptionUpload}>
              
                
              <div className={styles.linkInputSection}>
                {/* <p>{fileUrl}</p> */}
                <input className={styles.linkInput}  placeholder="example.com/sample.mp3" value={fileUrl }  onChange={(e) => setFileUrl(e.target.value) }></input>


              <div className={styles.linkLogo}>
                <button className="buttonStyle" onClick={handleChainButoonClick}>
              <img src={littleChainIcon} alt="littleChainIcon" />
              </button>

              </div>

              </div>
            
            <p className={styles.uploadDescription}>
            نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
            و دکمه را فشار دهید              </p>
          </div>

             ://****************************************************** */


             <div className={rstyles.resultCard}>
                <Outlet context={{fileSegments : selectedFile?.segments }}></Outlet>

                </div>
             }
            
          </div>

          {/* <div className={styles.cardFoot}>
            <p className={styles.footTitle}>زبان گفتار:</p>

            <div className={styles.langType}>
              <p className={styles.footItem}>فارسی</p>

              <button className="buttonStyle">
                <img src={dropIcon} alt="dropIcon" />
              </button>
            </div>
          </div> */}


          <SpeechCardFoot></SpeechCardFoot>
        </div>
        </>
    )
}