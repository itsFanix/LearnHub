
function MyButton() {

     return (
        <button type="submit">
             Add
        </button>
     )
}

function MyInput() {

    return (
        <div className = "mb-8" >
            <label  className=" block text-gray-700 text-sm font-bold mb-2">
               <h3 className="mb-2">
               New Task : 
                </h3> 
                <input  className="shadow appearance-none border-0 rounded w-full py-2 px-3  text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="newTask" required  />
            </label>
        </div>
    )

}

export function TodoForm () {

    return (
        <>
         <form  className="  bg-gray-50 shadow-md rounded px-10 pt-10 pb-10 mb-6">
            <MyInput/>
            <MyButton/>
         </form>
        </>
    )


}