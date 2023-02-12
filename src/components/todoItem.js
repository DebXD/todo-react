import { useState } from "react";
import React from "react";

const TodoItem = (props) => {
  let editBtnStyle = {
    marginLeft: "10px",
  };
  const [title, setTitle] = useState(props.todo.title)
  const [desc, setDesc] = useState(props.todo.desc)
  const submit = (e) =>{
    // Stop page from reloading on submit
    e.preventDefault();
    console.log(title, desc)
    if (!title || !desc){
      alert('Title or description can not be empty!')
  }
    props.editTODO(props.todo.sno, title, desc)

  }

  return (
    <li className="list-group-item">
      <div className="todo-container my-2">
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
      </div>


      <button
        className="btn btn-outline-danger mb-3"
        onClick={() => {
          if (window.confirm("Are you sure, You want to delete?")) {
            props.Delete(props.todo);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
        
      <button
        className="btn btn-outline-warning mb-3"
        data-bs-toggle="modal"
        data-bs-target= {"#" + props.todo.sno}
        style={editBtnStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={props.todo.sno}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="editButtonLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editButtonLabel">
                ADD TODO
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submit}>
                <div className="form-group">
                  <label className="col-form-label">TITLE</label>
                  <input type="text" className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">DESCRIPTION</label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    rows="3"
                    value={desc}
                    onChange={(e)=> setDesc(e.target.value)}
                  ></textarea>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-secondary btn-md my-3"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
