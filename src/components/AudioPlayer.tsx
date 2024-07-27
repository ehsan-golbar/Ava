import * as React from "react";
import {  useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
// import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

import StopIcon from "@mui/icons-material/Stop";

// const Widget = styled("div")(({ theme }) => ({
//   padding: 16,
//   borderRadius: 16,
//   //   direction :"ltr"
//   //   width: 343,
//   //   maxWidth: "100%",
//   //   margin: "auto",
//   //   position: "relative",
//   //   zIndex: 1,
//   //   backgroundColor:
//   //     theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
//   //   backdropFilter: "blur(40px)",
// }));

// const TinyText = styled(Typography)({
//   fontSize: "0.75rem",
//   opacity: 0.38,
//   fontWeight: 500,
//   letterSpacing: 0.2,
// });





export default function MusicPlayerSlider() {



  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${toPersianNumber(minute)}:${secondLeft < 10 ? `0${toPersianNumber(secondLeft)}` : toPersianNumber(secondLeft)}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  /* Back */

  // position: absolute;
  // width: 519px;
  // height: 34px;
  // left: 403px;
  // top: 649px;

  // background: #F8F8F8;
  // border-radius: 10px;


  const toPersianNumber = (num: number | string) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };
  

  return (
    <Box
      sx={{
        width: "fit-content",
        overflow: "hidden",
        direction: "ltr",
        backgroundColor: "#F8F8F8",
        borderRadius: "10px",
        margin: "1rem",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      {/* <Widget> */}
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          //   justifyContent="space-between"
          spacing={1}
          // sx={{ mb: 1 }}
        >
          <IconButton>
            <StopIcon
              sx={{ fontSize: "2rem", color: "#3D3D3D" }}
              htmlColor={mainIconColor}
            ></StopIcon>
          </IconButton>

          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: "2rem", color: "#3D3D3D" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "2rem", color: "#3D3D3D" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>

          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value as number)}
            sx={{
              color: "rgba(17,138,211,1)",
              height: 4,
              width: 250,
              "&.MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                color: "#3D3D3D",
                "&::before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.75,
                color: "#C6C6C6",
              },
            }}
          />

          <Typography sx={{ color: "#3D3D3D" , fontFamily: 'IRANSansXFaNum' ,
fontStyle: 'normal',
fontWeight: '600',
fontSize: '15px',
lineHeight: '1px',
/* identical to box height */
textAlign: 'center'

}}>
            {formatDuration(position)}
          </Typography>

          <Stack
            spacing={1}
            direction="row"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
          >
            {/* <VolumeDownRounded /> */}
            <VolumeUpRounded sx={{ color: "#3D3D3D" }} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                width: 120,
                color:
                  theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                  color: "rgba(17,138,211,1)",
                },
                "& .MuiSlider-thumb": {
                  display: "none",
                  // color : "rgba(17,138,211,1)",
                  // width: 24,
                  // height: 24,
                  // backgroundColor: "#fff",
                  // "&::before": {
                  //   boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  // },
                  // "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  //   boxShadow: "none",
                  // },
                },
              }}
            />
          </Stack>
        </Stack>
      {/* </Widget> */}
    </Box>
  );
}

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Slider from "@mui/material/Slider";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import PauseRounded from "@mui/icons-material/PauseRounded";
// import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
// import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
// import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
// import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
// import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

// const Widget = styled("div")(({ theme }) => ({
//   padding: 16,
//   borderRadius: 16,
//   width: 343,
//   maxWidth: "100%",
//   margin: "auto",
//   position: "relative",
//   zIndex: 1,
//   backgroundColor:
//     theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
//   backdropFilter: "blur(40px)",
// }));

// // const CoverImage = styled("div")({
// //   width: 100,
// //   height: 100,
// //   objectFit: "cover",
// //   overflow: "hidden",
// //   flexShrink: 0,
// //   borderRadius: 8,
// //   backgroundColor: "rgba(0,0,0,0.08)",
// //   "& > img": {
// //     width: "100%",
// //   },
// // });

// const TinyText = styled(Typography)({
//   fontSize: "0.75rem",
//   opacity: 0.38,
//   fontWeight: 500,
//   letterSpacing: 0.2,
// });

// export default function MusicPlayerSlider() {
//   const theme = useTheme();
//   const duration = 200; // seconds
//   const [position, setPosition] = React.useState(32);
//   const [paused, setPaused] = React.useState(false);
//   function formatDuration(value: number) {
//     const minute = Math.floor(value / 60);
//     const secondLeft = value - minute * 60;
//     return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
//   }
//   const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
//   const lightIconColor =
//     theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>
//       <Widget>

//       <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mt: -1,
//           }}
//         >
//           {/* <IconButton aria-label="previous song">
//             <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
//           </IconButton> */}
//           <IconButton
//             aria-label={paused ? "play" : "pause"}
//             onClick={() => setPaused(!paused)}
//           >
//             {paused ? (
//               <PlayArrowRounded
//                 sx={{ fontSize: "3rem" }}
//                 htmlColor={mainIconColor}
//               />
//             ) : (
//               <PauseRounded
//                 sx={{ fontSize: "3rem" }}
//                 htmlColor={mainIconColor}
//               />
//             )}
//           </IconButton>
//           {/* <IconButton aria-label="next song">
//             <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
//           </IconButton> */}
//         </Box>
//         <Slider
//           aria-label="time-indicator"
//           size="small"
//           value={position}
//           min={0}
//           step={1}
//           max={duration}
//           onChange={(_, value) => setPosition(value as number)}
//           sx={{
//             color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
//             height: 4,
//             "& .MuiSlider-thumb": {
//               width: 8,
//               height: 8,
//               transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
//               "&::before": {
//                 boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
//               },
//               "&:hover, &.Mui-focusVisible": {
//                 boxShadow: `0px 0px 0px 8px ${
//                   theme.palette.mode === "dark"
//                     ? "rgb(255 255 255 / 16%)"
//                     : "rgb(0 0 0 / 16%)"
//                 }`,
//               },
//               "&.Mui-active": {
//                 width: 20,
//                 height: 20,
//               },
//             },
//             "& .MuiSlider-rail": {
//               opacity: 0.28,
//             },
//           }}
//         />
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             mt: -2,
//           }}
//         >
//           <TinyText>{formatDuration(position)}</TinyText>
//           {/* <TinyText>-{formatDuration(duration - position)}</TinyText> */}
//         </Box>

//         <Stack
//           spacing={2}
//           direction="row"
//           sx={{ mb: 1, px: 1 }}
//           alignItems="center"
//         >
//           {/* <VolumeDownRounded htmlColor={lightIconColor} /> */}
//           <Slider
//             aria-label="Volume"
//             defaultValue={30}
//             sx={{
//               color:
//                 theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
//               "& .MuiSlider-track": {
//                 border: "none",
//               },
//               "& .MuiSlider-thumb": {
//                 width: 24,
//                 height: 24,
//                 backgroundColor: "#fff",
//                 "&::before": {
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
//                 },
//                 "&:hover, &.Mui-focusVisible, &.Mui-active": {
//                   boxShadow: "none",
//                 },
//               },
//             }}
//           />
//           <VolumeUpRounded />
//         </Stack>
//       </Widget>

//     </Box>
//   );
// }
