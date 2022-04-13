import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = (props) => {

  return (   
      
    <div className="container">
        {
          props.task.map((t)=><TaskItem t={t} key={t}/>)
        }
    </div>
    
    
  )
}
