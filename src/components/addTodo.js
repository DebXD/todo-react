import React, { useState } from "react";

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] =  useState("");
    const submit = (e) =>{
        e.preventDefault();
        console.log(title, desc)
        if (!title || !desc){
            alert('Title or description can not be empty!')
        }
        props.addTODO(title, desc)
        
    }
  return (
    <div className="container">
    <form onSubmit={submit}>
        
        <div className="mb-3">
            <label>
            TITLE
            </label>
            <input
            type="text"
            className="form-control"
            placeholder="this is a title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">
            DESC.
            </label>
            <textarea
            className="form-control"
            rows="3"
            value={desc}
            onChange={e => setDesc(e.target.value)}></textarea>
        </div>
        <button className="btn btn-outline-dark">Submit</button>
        
        </form>
        </div>
  );
}
