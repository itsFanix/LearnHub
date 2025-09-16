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
      className="min-h-screen flex  text-gr font-mono"
      style={{
        backgroundColor: "#ECF2E6",
      }}
    >
      <div
        className=" rounded-3xl p-8 bg-white 
        max-wl-xl space-y-6 border-green-200 border-4"
      >
        <h1 className="text-5xl font-extrabold mb-6 font-pixel text-green-200 text-center">
          TO-DO LIST
        </h1>
        <TodoForm onAddTask={addTask} />
      </div>
      <TodoList tasks={tasks} />
      <div className="border-green-200 border-4 m-2 "> Hello </div>
      <div className="border-green-200 border-4 m-2 "> Fanny </div>
      <div className="border-green-200 border-4 m-2"> is Playing </div>
      <div className="border-green-200 border-4 m-2 ">with FlexBox </div>
    </div>
  );
}

export default App;
