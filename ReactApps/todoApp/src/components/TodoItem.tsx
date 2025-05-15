/**
 *
 * @returns
 * Todo value
 */

function TodoItem(todoValue: string) {
  return (
    <>
      <div className=" bg-cover bg-center rounded-lg p-4 flex flex-row  bg-red-200 m-2">
        <h3 className="">{todoValue}</h3>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </>
  );
}

export default TodoItem;
