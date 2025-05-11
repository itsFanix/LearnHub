import { useState } from "react";

type Props = {
  onAddTask: (task: string) => void;
};

function MyInput() {
  return (
    <div className="mb-8">
      <label className=" block text-gray-700 text-sm font-bold mb-2">
        <h3 className="mb-2">New Task :</h3>
        <input
          className="shadow appearance-none border-0 rounded w-full py-2 px-3  text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
          id="newTask"
          required
        />
      </label>
    </div>
  );
}

export function TodoForm({ onAddTask }: Props) {
  // Event handlers have access to the components's props caus
  // the are declared inside of the component
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input);
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-10 pt-10 pb-10 mb-6 w-full "
      >
        <div className="mb-8">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            <h3 className="mb-2">New Task :</h3>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="New Task"
              className="shadow appearance-none border-0 rounded w-full py-2 px-3  text-gray-700 leading-tight  focus:outline-none focus:shadow-outline"
              id="newTask"
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-300 w-40  rounded-xl  py-2 px-3"
        >
          Add
        </button>
      </form>
    </>
  );
}
