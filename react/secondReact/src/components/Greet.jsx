import React from 'react'

const Greet = (params) => {
    const recievedName=params.props1
    const recievedProps2=params.second
    console.log(recievedName)
  return (
    <div>
        
       <h2>Hello {recievedName} !!</h2> 
       <h1>this is the second prop : {recievedProps2}</h1>
    </div>
  )
}

export default Greet