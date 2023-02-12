import Header from "./components/header";
import Todos from "./components/todos";
import Footer from "./components/footer";
import AddTodo from "./components/addTodo";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";

function App() {
  if (localStorage.getItem("todos") === null) {
    let todo = [];
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const Delete = (todo) => {
    console.log("Deleting TODO", todo);
    // This delete method does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);
    let newTodos = todos.filter((item) => {
      return item !== todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const addTODO = (title, desc) => {
    //console.log("adding note");
    let sno = todos.length + 1;
    let todoTOBeAdd = { sno: sno, title: title, desc: desc };
    console.log(todoTOBeAdd);
    //localStorage.setItem('todos', JSON.stringify(todoTOBeAdd))
    let newTodos = [...todos, todoTOBeAdd];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    console.log(newTodos);
    setTodos(newTodos);
  };
  // fn for editing todo
  const editTODO = (key, editedTitle, editedDesc) => {
    console.log(key, editedTitle, editedDesc);

    let newTodos = todos.filter((item) => {
      return item.sno !== key;
    });
    let editedTodo = { sno: key, title: editedTitle, desc: editedDesc };
    let editedTodos = [...newTodos, editedTodo];
    localStorage.setItem("todos", JSON.stringify(editedTodos));
    setTodos(editedTodos);
  };

  return (
    <>
      <Header title="TODOS" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTODO={addTODO} />
              <Todos todos={todos} Delete={Delete} editTODO={editTODO} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;