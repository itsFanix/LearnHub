import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-[80vw] mx-auto bg-amber-400 h-screen flex flex-col items-center">
      <div className="w-1/3  bg-green-200   p-10">
        <TodoForm />
      </div>
      <div className="w-2/3  bg-blue-200  ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
