import Header from "./components/header";
import Todos from "./components/todos";
//import TodoItem from "./components/todoItem";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
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
  ]);

  const Delete = (todo) => {
    console.log("Deleting TODO", todo);
    // This delete method does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
  };

  return (
    <div>
      <Header title="Todo App" searchBar={false} />
      <Todos todoList={todos} Delete={Delete} />
      <Footer />
    </div>
  );
  };

export default App;
