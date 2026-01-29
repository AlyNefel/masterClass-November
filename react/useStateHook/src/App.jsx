import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 // const [name,setName]=useState("")
 const [isDarkMode,setIsDarkMode]=useState(true)
 //changeTheme
  const changeTheme =()=>setIsDarkMode(!isDarkMode)
 // style of dark and light mode 
/*
const age = 20 
const message = age >=18 ?"U can have a driving licence":"U can not have a driving LC"
*/

 const styleMode={
backgroundColor:isDarkMode?"black":"white",
color:isDarkMode?"white":"black",
height:"450px",
width:"450px"

 }
 const increment =() => setCount((count) => count + 1)
  const decrement =() => setCount((count) => count - 1)

  
  return (
    <div style={styleMode}>
      <h1>{count}</h1>
      <h1>Use State (counter Example)</h1>
      <div className="card">
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Dencrement
        </button>
        </div>
        {/* Button to change dark/light mode */}
 <div className="card">
        <button onClick={changeTheme}>
          Change
        </button>
        </div>
        <div  style={styleMode}  className="card">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae laudantium, veritatis eaque explicabo et expedita beatae fuga blanditiis itaque doloribus, nesciunt non eius sapiente delectus commodi cumque sequi alias?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique dolor iste dolores, enim optio a possimus. Maxime, quidem? Esse, rerum. Nostrum placeat quibusdam, vero debitis dolor natus vitae. Quaerat.
          </h3>
        </div>
    </div>
  )
}

export default App
