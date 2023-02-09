import React from "react";

const TodoItem = (props) => {

  return (
    <li className="list-group-item">
      <div className="todo-container my-2">
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
      </div>

      <button
        className="btn btn-outline-danger mb-3"
        onClick={() => {
          window.confirm("Are you sure, You want to delete?");
          if (true) {
            props.Delete(props.todo);
          }
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
