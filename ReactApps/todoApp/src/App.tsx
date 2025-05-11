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
        className=" rounded-4xl p-8 w-2xl mt-25
        max-wl-xl space-y-6"
        style={{
          border: "5px solid #A5C8A6",
          boxShadow: "0 0 15px rgba(255,192,203,0.4)",
          backgroundColor: "#DBEACC",
        }}
      >
        <h1
          className="text-7xl font-extrabold mb-6 font-[pixel]"
          style={{
            color: " #A5C8A6",
          }}
        >
          TO-DO LIST
        </h1>
        {/* I need to pass props */}
        <TodoForm onAddTask={addTask} />
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
