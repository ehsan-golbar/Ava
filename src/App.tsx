import Sidebar from "./components/Sidebar";
import "./App.css";
import ConvertSpeech from "./components/ConvertSpeech";
import "./iranyekanfont.css";
import "./IRANSans.css";
import Archive from "./components/Archive";
// import styles from "./components/speech.module.css";
// import dropIcon from "./assets/drop Icon.png";
// import userIcon from "./assets/user Icon.png";

import UserType from "./components/UserType";
import { Route, Routes } from "react-router-dom";
import UploadFile from "./components/UploadFile";
import RecordSpeech from "./components/RecordSpeech";
import SimpleText from "./components/SimpleText";
import TimedText from "./components/TimedText";
import LinkFile from "./components/LinkFile";

export default function App() {
  return (
    <>
      <div style={{ background: "#FEFEFE" }}>
        <UserType></UserType>
        <Sidebar></Sidebar>

        <Routes>
          {/* <Route path="/" element={<UserType />} /> */}
          <Route index element={<ConvertSpeech />}/>
          <Route path="/convert-speech/*" element={<ConvertSpeech />}>
       
            <Route index element={<RecordSpeech />} />
            {/* Default child route */}
            <Route path="record" element={<RecordSpeech />}></Route>
            <Route
              path="upload/*"
              element={<UploadFile state="simpleResult" />}
            >
              <Route
                path="simpleText"
                element={<SimpleText source="convert"></SimpleText>}
              ></Route>
              <Route index element={<TimedText source="convert"></TimedText>}></Route>
              <Route path="timedText" element={<TimedText source="convert"></TimedText>}></Route>
            </Route>
            <Route path="link" element={<LinkFile />}></Route>
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
          <Route path="/archive/*" element={<Archive />} >
              <Route path="simpleResult" element={<SimpleText source="archive"></SimpleText>} ></Route>
              <Route index element={<SimpleText source="archive"></SimpleText>} ></Route>
              <Route path="timedResult" element={<TimedText source="archive" ></TimedText>} ></Route>
          
          
          </Route>

          {/* <Route path="/convert-speech/upload/*" element={<UploadFile state={"simpleResult"} />} /> */}
          {/* <Route path="/convert-speech/upload/*" element={<UploadFile state={"simpleResult"} />} /> */}

          {/* <Route path="/convert-speech/upload/*" element={<UploadFile state="simpleResult"/>}/> */}
          {/* Add more routes as needed */}
        </Routes>

        {/*       
      <ConvertSpeech></ConvertSpeech>
      <Archive></Archive> */}
        {/* <p>salam</p> */}
      </div>
    </>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
