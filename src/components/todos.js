import React from "react";
import TodoItem from "./todoItem";

const Todos = (props) => {
    
  return (
    <div className="container">
      <h3>TODO LIST</h3>
      
      {props.todos.length===0  ? <p>NO TODOS</p> : (
      props.todos.map((todo) => {
        return (
          <>
            <TodoItem todo={todo} key={todo.sno} Delete={props.Delete} />
            </>
        );
      }))
      }
    </div>
  );
};

export default Todos;
