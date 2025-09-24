import TodoItem from "./TodoItem";

type Props = {
  tasks: string[];
};

export function TodoList({ tasks }: Props) {
  return (
    <div className="bg-red-400 w-1/2">
      <ul>
        {tasks.map((task, i) => (
          <li key={i}> {TodoItem(task)}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
