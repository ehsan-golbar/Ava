import styles from "./speech.module.css";
import dropIcon from "../assets/drop Icon.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export default function SpeechCardFoot() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [language, setLanguage] = React.useState("فارسی"); // State for selected language
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    handleClose();
  };

  return (
    <div className={styles.cardFoot}>
      <p className={styles.footTitle}>زبان گفتار:</p>

      <div className={styles.langType}>
        <p className={styles.footItem}>{language}</p>

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
           <img src={dropIcon} alt="dropIcon" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleLanguageChange("فارسی")}>فارسی</MenuItem>
            <MenuItem onClick={() => handleLanguageChange("انگلیسی")}>انگلیسی</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}


// import styles from "./speech.module.css";
// import dropIcon from "../assets/drop Icon.png";

// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import React from "react";

// export default function SpeechCardFoot() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <div className={styles.cardFoot}>
//         <p className={styles.footTitle}>زبان گفتار:</p>

//         <div className={styles.langType}>
//           <p className={styles.footItem}>فارسی</p>

//           <div>
//             <Button
//               id="basic-button"
//               aria-controls={open ? "basic-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleClick}
//             >
//                <img src={dropIcon} alt="dropIcon" />
//             </Button>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
              
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
                
//               }}
//             >
//               <MenuItem onClick={handleClose}>فارسی</MenuItem>
//               <MenuItem onClick={handleClose}>انگلیسی </MenuItem>
              
//             </Menu>
//           </div>

//           {/*                 
//               <button className="buttonStyle">
//                 <img src={dropIcon} alt="dropIcon" />
//               </button> */}
//         </div>
//       </div>
//     </>
//   );
// }
