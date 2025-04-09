import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-[80vw] mx-auto bg-amber-50 h-screen flex flex-col items-center">
      <div className=" w-1/3 p-10">
        <TodoForm onAddTask={addTask} />
      </div>
      <div className="w-2/3  bg-blue-200  ">
        {/* I need to pass props */}
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
