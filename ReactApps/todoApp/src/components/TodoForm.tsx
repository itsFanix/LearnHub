import { useState } from "react";

type Props = {
  onAddTask: (task: string) => void;
};

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
        className="flex flex-row items-center justify-center gap-4  "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Task"
          className="shadow appearance-none bg-pink-50 text-pink-100  border-2 rounded-2xl  border-green-200  py-2 px-3   focus:outline-none focus:shadow-outline text-2xl font-bold"
          id="newTask"
          required
        />
        <button
          type="submit"
          className="bg-pink-50 text-pink-100 font-bold border-2 rounded-2xl border-green-200 py-2 px-4 text-2xl "
        >
          Add
        </button>
      </form>
    </>
  );
}
