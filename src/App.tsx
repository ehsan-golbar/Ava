import Sidebar from "./components/Sidebar";
import "./App.css";
import ConvertSpeech from "./components/ConvertSpeech";
import "./iranyekanfont.css";
import "./IRANSans.css";
import Archive from "./components/Archive";
import styles from "./components/speech.module.css";
import dropIcon from "./assets/drop Icon.png";
import userIcon from "./assets/user Icon.png";

import UserType from "./components/UserType"
export default function App() {
  return (
    <>
    <UserType></UserType>
      <Sidebar></Sidebar>
      <ConvertSpeech></ConvertSpeech>
      <Archive></Archive>
      {/* <p>salam</p> */}
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
