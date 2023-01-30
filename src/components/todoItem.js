import React from "react";

const TodoItem = (props) => {
  return (
    <div>
    <div className="todo-container">
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
    </div>
    
    <button className="btn btn-outline-danger" onClick={() => (props.onDelete(props.todo)) }>Delete</button>
  </div>
  
  
  );
};
export default TodoItem;
