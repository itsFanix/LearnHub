import { useState } from "react";

type Props = {
  tasks: string[];
};

export function TodoList({ tasks }: Props) {
  return (
    <>
      <h2>I display Your TODO </h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}> {task}</li>
        ))}
      </ul>
    </>
  );
}
