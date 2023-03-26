import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
export const TodoItem = (props) => {

  return (
    <div>
     <FontAwesomeIcon icon={faCircleCheck}  size="2x" className='text-success mr-2'/>
     <span className='h3'> {props.todo.title}</span>
      <p className='ml-5 ' style={{fontSize:"1.3rem"}}>{props.todo.desc}</p>
      <button className='btn btn-danger' onClick={()=>props.onDelete(props.todo)}>  <FontAwesomeIcon icon={faTrashCan} className="mr-2" />delete</button>

    </div>
  )
}
