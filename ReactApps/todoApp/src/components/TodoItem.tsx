/**
 *
 * @returns
 * Todo value
 */

function TodoItem(todoValue: string) {
  return (
    <>
      <h3 className="text-green-200 font-extrabold  text-3xl">{todoValue}</h3>
      {/* <div className=" bg-cover bg-center rounded-lg p-4 flex flex-row m-2">
        {/* <button>Edit</button>
        <button>Remove</button> </div> */}
    </>
  );
}

export default TodoItem;
