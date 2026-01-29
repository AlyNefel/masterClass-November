import React from 'react'
import SubmitButton from './SubmitButton'
const Greet = (params) => {
    // const recievedName=params.props1
    // const recievedProps2=params.second
    const{props1,second}=params
    console.log(props1)
  return (
    <div>
        <SubmitButton sendText="Submit" props1={props1}></SubmitButton>
       <h2>Hello {props1} !!</h2> 
       <h1>this is the second prop : {second}</h1>
    </div>
  )
}

export default Greet