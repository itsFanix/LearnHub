import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 text-gr font-mono"
      style={{
        backgroundColor: "#FCF2E6",
      }}
    >
      <div
        className=" rounded-4xl p-8 w-2xl mt-25 bg-white
        max-wl-xl space-y-6 border-green-200 border-4"
      >
        <h1 className="text-5xl font-extrabold mb-6 font-pixel text-green-200 text-center">
          TO-DO LIST
        </h1>
        <TodoForm onAddTask={addTask} />
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
