import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/signup" element = {<SignUp/>}></Route>
        <Route path = "/auth" element = {<Auth/>}></Route>
        <Route path = "/login" element = {<LogIn/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}></Route>
        <Route path = "*" element = {<NoMatch/>}></Route>
      </Routes>   
    </BrowserRouter>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
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
//     </div>
//   )
// }

// export default App
