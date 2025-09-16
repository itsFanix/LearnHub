/**
 *
 * @returns
 * Todo value
 */
// probleme de size
function TodoItem(todoValue: string) {
  return (
    <div className="flex flex-row m-2 bg-amber-950">
      {/* break-words */}
      <p className="text-green-200 font-extrabold basis-3/4 wrap-anywhere bg-amber-400">
        {todoValue}
      </p>
      <div className=" text-green-200 bg-cover bg-center rounded-lg flex justify-between basis-1/4 ">
        <button>Edit</button>{" "}
        {/* Quand on clique on un pop up s'affiche et permet de modifier l'element */}
        <button>Remove</button>{" "}
        {/* trace 1 trait sur le texte, Barrer  change la couleur en gris */}
      </div>
    </div>
  );
}

export default TodoItem;
