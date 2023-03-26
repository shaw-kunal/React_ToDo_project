import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');




    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("title or description can be blank");
            else
            {
            addTodo(title,desc);
            setTimeout(() => {
                setTitle("");
                setDesc("");
                
            }, 500);
        }
    }


    return (
        <div className='container '>
            <h2>Add to Todo</h2>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12'>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label >Todo Title</label>
                            <input type="text" value={title} className="form-control" id="title" onChange={(e) => { setTitle(e.target.value) }} />

                        </div>
                        <div className="form-group">
                            <label>Todo description</label>
                            <textarea className="form-control" value={desc} id="desc" rows="1" onChange={(e) => {
                                setDesc(e.target.value)
                            }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-success" >Submit</button>
                    </form>


                </div>
            </div>

        </div>
    )
}
