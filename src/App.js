import Header from "./components/header";
import Todos from "./components/todos";
//import TodoItem from "./components/todoItem";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("Deleting TODO", todo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    console.log(todos);
  };
  let todos = [
    {
      sno: 1,
      title: "go the super market",
      desc: "you have to buy your daily dairy, remember",
    },
    {
      sno: 2,
      title: "drink water",
      desc: "drink water properly",
    },
    {
      sno: 3,
      title: "go the super market",
      desc: "buy groceries",
    },
  ];
  return (
    <div>
      <Header title="Todo App" searchBar={false} />
      <Todos todoList={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
