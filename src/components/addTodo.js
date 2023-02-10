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
        else{
            props.addTODO(title, desc)
        setTitle("");
        setDesc("");
        
        }
        
    }
  return (
    <div className="container">
        {/* <!-- Button trigger modal --> */}
<div className="mt-3">
<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  ADD
</button>
</div>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">ADD TODO</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={submit}>
          <div className="form-group">
            <label className="col-form-label" >TITLE</label>
            <input type="text" className="form-control"  value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="form-group">
            <label  className="col-form-label">DESCRIPTION</label>
            <textarea className="form-control" id="message-text" rows="3" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
          </div>
        
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button className="btn btn-outline-dark btn-md my-3" data-bs-dismiss="modal">Submit</button>
      </div>
      </form>
      </div>
    </div>
  </div>
</div>


    {/* <form onSubmit={submit}>
        
        <div className="mb-3 mt-3">
            <label>
            TITLE
            </label>
            <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">
            DESCRIPTION
            </label>
            <textarea
            className="form-control"
            rows="3"
            value={desc}
            onChange={e => setDesc(e.target.value)}></textarea>
        </div>
        <div className="text-center">
            <button className="btn btn-outline-dark btn-md my-3">Submit</button>
        </div>
        </form> */}
        </div>
  );
}
