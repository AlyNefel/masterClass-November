import { useState } from 'react'
import Greet from './components/Greet'

function App() {
const name= "Ali"  // const name = result of the login 

// const array= ["test","apple"]
  return (
    <>
    
    <Greet props1={name} second="secondProp" ></Greet> 
   
     <h1>This is from App </h1>
      <Greet props1="Tesnim"></Greet>
      
    </>
  )
}

export default App
