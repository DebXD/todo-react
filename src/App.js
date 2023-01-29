import React from "react";
import Header from "./components/header";
import Todos from "./components/todos";
import TodoItem from "./components/todo";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header title="TODO LIST" />
      <Todos />
      <TodoItem />
      <Footer />
    </div>
  );
}

export default App;
