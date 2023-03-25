import React from 'react'


export const TodoItem = (props) => {

  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className='btn  btn-danger' onClick={()=>props.onDelete(props.todo)}>delete</button>

    </div>
  )
}
