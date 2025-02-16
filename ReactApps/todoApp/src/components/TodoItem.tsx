
/**
 * 
 * @returns 
 * Todo value 
 */

import { Task } from "../data/types"

function TodoItem(todo: Task ) {
    return (
        <>
        <div>
            <h3>todoValue</h3>
            <button>Edit</button>
            <button>Remove</button>
        </div>
        </>
    )

}

export default TodoItem