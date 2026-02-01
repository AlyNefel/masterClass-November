import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [lanches, setLanches] = useState([])
  // using fetch (native javascript method to ask for information from external api)
  const fetchLanches=()=>{
    fetch("https://api.spacexdata.com/v3/launches")
    .then(response=>response.json()) // when the response is ready ,change it to json format
    .then(data=>{
      const firstSixLanches = data.slice(0,6)
      console.log(firstSixLanches)
      setLanches(firstSixLanches)
    })//if the response.json() is ready , console.log it 
  }

  return (
    <div className='container mt-5'>
     <button className='btn btn-primary' onClick={fetchLanches}>Get Lanches</button>
    </div>
  )
}

export default App
