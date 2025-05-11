import { useState } from "react";
import TodoItem from "./TodoItem";

type Props = {
  tasks: string[];
};

export function TodoList({ tasks }: Props) {
  return (
    <>
      <h2>I display Your TODO </h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}> {TodoItem(task)}</li>
        ))}
      </ul>
    </>
  );
}
