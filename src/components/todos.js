import React from "react";
import TodoItem from "./todoItem";

const Todos = (props) => {
    
  return (
    <div className="container">
      <h3 className="text-center">TODO LIST</h3>
      <ul className="list-group my-4">
      {props.todos.length===0  ? <p>NO TODOS</p> : (
      props.todos.map((todo) => {
        return (
            <TodoItem todo={todo} key={todo.sno} Delete={props.Delete} />
        );
      }))
      }
      </ul>
    </div>
  );
};

export default Todos;
