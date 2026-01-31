import React from 'react'

const TaskItem = (props) => {
    const {task}=props
  return (
    <div>
         <li>{task}</li>
    </div>
  )
}

export default TaskItem