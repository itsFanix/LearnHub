import TodoItem from "./TodoItem";

type Props = {
  tasks: string[];
};

export function TodoList({ tasks }: Props) {
  return (
    <div className="">
      <ul>
        {tasks.map((task, i) => (
          <li key={i}> {TodoItem(task)}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
