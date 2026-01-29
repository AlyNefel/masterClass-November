import React from 'react'

const SubmitButton = (props) => {
    // style in jsx component 
    //1- const (variable) fiha style : 
    const buttonStyle ={
        //background-color
        backgroundColor:"red",
        fontSize:"16px"
    }

    //2-pass the object style directly 
    const {sendText,props1}=props
  return (
    <div>
        <button  style={buttonStyle}>{sendText} {props1}</button>
        <button style={{
        //background-color
        backgroundColor:"red",
        fontSize:"16px"
    }}>Send</button>
    </div>
  )
}

export default SubmitButton