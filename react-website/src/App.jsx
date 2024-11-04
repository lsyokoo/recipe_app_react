// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Title from "./Title"
// import Welcome from "./Welcome";

// // export default function App() {
// //   const [count, setCount] = useState(0)

// function App() {

//   const [count, setCount] = useState(0)
//   const your_name = "New Yorkers!" // passing your_name from App (parent) to Greeting (child)
//   const your_greeting = "This is the greeting from DT"
//   return (
//   <>

//   <Title/>

//   <Welcome greeting={"yooo"} name="lily" age={10}/>
//   <Welcome greeting={"hiii"} name={your_name} age={20} />
//   <Welcome greeting={your_greeting} name={"siyu"} age={30}/>


//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>


//       <h1>Siyu</h1>


//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
    
//   )
// }

// // export default App

// export default App
import React from 'react';
import './assets/App.css';
import MealList from './components/MealList';

function App() {
  return (
    <div>
      <h1>Recipe Cards</h1>
      <MealList />
    </div>
  );
}

export default App;
