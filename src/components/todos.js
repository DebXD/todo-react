import React from "react";
import TodoItem from "./todoItem";

const Todos = (props) => {
    
  return(
    <div className="container">
        <h3>TODO LIST</h3>
        {
        props.todoList.map((todo) => {
            return(
            <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            </>)})
            }
        
  </div>
  );
};

export default Todos;
