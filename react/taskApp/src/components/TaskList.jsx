import React from 'react'
import TaskItem from './TaskItem'
const TaskList = (props) => {
    const {tasks}=props
  return (
    <div>
        <h2>List of tasks</h2>
 {tasks.length?(
  <ul>
    {
      tasks.map((t,index)=>(
       <TaskItem key={index} task={t}></TaskItem>
      ))
    }
  </ul>):<h1>There is no tasks yet !</h1>}
    </div>
  )
}

export default TaskList