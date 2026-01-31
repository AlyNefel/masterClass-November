import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // declare a state variable 
//  const [name,setName]=useState("")
//   // password state 
  // const [password,setPassword]=useState("")

 //state of form data
 const [formData,setFormData] =useState({name:"",password:"",email:""})
 // const [colors,setColors]=useState([])
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

  // handleChange function for the input
//   const handleChange =(e)=>{
// // console.log(e.nativeEvent.data)
// // console.log(e.target.value)
// // s => name = s || 2- a => sa 
// setName(e.target.value)
// console.log("this is the name after the onchange event",name)
//   }
  // const handleChangePassword=(e)=>{
    // setPassword(e.target.value)
  // }

  const handleForm=(e)=>{
    const {name,value}=e.target
    // {name:"email",
    //   value:a
    // }
    console.log("target",e.target)
    console.log("name",name)
    console.log("value",value)
    // setter 
    setFormData((prevData)=>(
      // {email:"a"
      //   password:"",
      //   name:1
      // }

      {
      ...prevData,
      [name]:value
    }
  ))
  }

  // 
  const handleClick = ()=>{
    console.log("Form submitted",formData)
  }
  return (
    <div style={styleMode}>
        <div className="card">
      {/* Input to collect the name  */}
      {/* <h2>Please enter your Name : {name} </h2>
        <input
         value={name}

        style={{height:"40px",width:"300px"}}
        type="text"
        onChange={handleChange}
   
          /> */}
{/* password input */}
 {/* <h2>Please enter your Password : {password} </h2>
        <input
         value={password}

        style={{height:"40px",width:"300px"}}
        type="password"
        onChange={handleChangePassword}
   
          /> */}
        <hr />
        {/* collect multiple data form */}
<h2>Please enter your Name1 : {formData.name} </h2>
        <input
         value={formData.name}
        name="name"
        style={{height:"40px",width:"300px"}}
        type="text"
        onChange={handleForm}
   
          />
{/* password input */}
 <h2>Please enter your Password1 : {formData.password} </h2>
        <input
         value={formData.password}
        name="password"
        style={{height:"40px",width:"300px"}}
        type="password"
        onChange={handleForm}
   
          />
       <h2>Please enter your email : {formData.email} </h2>
        <input
         value={formData.email}
        name="email"
        style={{height:"40px",width:"300px"}}
        type="text"
        onChange={handleForm}
   
          />   
          <button onClick={handleClick}>Submit</button>
        </div>
<hr />
        {/* Counter section */}
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
        Change to   {isDarkMode?"Light":"Dark"}
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
