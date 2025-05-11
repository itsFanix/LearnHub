/**
 *
 * @returns
 * Todo value
 */

function TodoItem(todoValue: string) {
  return (
    <>
      <div>
        <h3>{todoValue}</h3>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </>
  );
}

export default TodoItem;
