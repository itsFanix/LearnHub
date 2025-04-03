import { useState } from "react";

interface Props {}

export function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h2>I display Your TODO </h2>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </>
  );
}
