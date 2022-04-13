import React from 'react'

export const TaskItem = (props) => {
  
  return (
    <div>
        {/* <input type="text" className="form-control" value={props.task} onChange={t} id="Task" placeholder="Enter Task"/> */}
<li >{props.t}</li>
    </div>
  )
}
