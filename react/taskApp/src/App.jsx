import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css'

function App() {
 
//state for all tasks
const [tasks,setTasks]=useState([])
// tasks=[{name:"task1",id:1523},task2,task3] // t=task1 , index = 0 // t=task2 , index 1



const handleAddTask=(newTask)=>{
  // e.preventDefault()
// add task to the tasks array
setTasks([...tasks,newTask])
// make the input empty again
console.log(tasks)
}
  return (
    <div className="container">
<h1>TOdo APP</h1>
{/* form to add task  */}
<AddTask handleAddTask={handleAddTask}></AddTask>

  {/* display tasks array using .map built in function  */}
  <TaskList tasks={tasks}></TaskList>
    </div>
  )
}

export default App
