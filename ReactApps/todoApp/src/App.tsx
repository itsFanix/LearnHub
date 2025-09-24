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
  // flex-wrap-reverse flex-col-reverse justify-center content-between
  return (
    <div
      className=" min-h-screen  min-w-screen flex  flex-col items-center text-gr font-mono"
      style={{
        backgroundColor: "#ECF2E6",
      }}
    >
      <h1 className="text-5xl font-extrabold m-10 font-pixel text-green-200 text-center">
        TO-DO LIST
      </h1>
      <div
        className=" rounded-3xl p-8 bg-white 
         space-y-6 border-green-200 border-4"
      >
        <TodoForm onAddTask={addTask} />
      </div>
      <TodoList tasks={tasks} />
      <div className="border-green-200 border-4 m-2  "> Hello</div>
      <div className="border-green-200 border-4 m-2 w-2xs  "> Fanny </div>
      <div className="border-green-200 border-4 m-2 w-2xs "> is Playing </div>
      <div className="border-green-200 border-4 m-2 w-2xs ">with FlexBox </div>
      <div className="border-green-200 border-4 m-2 w-2xs ">IT is funny </div>
      <div className="border-green-200 border-4 m-2 w-2xs ">I love it </div>
    </div>
  );
}

export default App;
