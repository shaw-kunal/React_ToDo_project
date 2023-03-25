import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

    return (
        <div className="container  p-4" >
            <h3 className='my-4'>Todo list</h3>

            {props.todos.length === 0 ?   <h4 className='my-4'>Nothing to show ! Add your  ToDo	&#128512;</h4> :

                props.todos.map((todo) => {
                    return <> <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} /> <hr/></>
                })
            }

        </div>
    )
}
