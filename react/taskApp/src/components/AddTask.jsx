import React from 'react'
import {useState} from 'react'
const AddTask = (props) => {
     //state fo one task
  const [task, setTask] = useState("")
    const {handleAddTask}=props
    const handelTask=(e)=>{
  setTask(e.target.value)
}

const addTask=()=>{
    handleAddTask(task)
    setTask("")
}
  return (
    <div>
        
      <div className="input-group mb-3">
  <input type="text" 
  className="form-control" 
  placeholder="please enter ur task"
  value={task}
  onChange={handelTask} 
  aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary"
type="submit"
  id="button-addon2" onClick={addTask}>Add</button>
</div>
  
    </div>
  )
}

export default AddTask