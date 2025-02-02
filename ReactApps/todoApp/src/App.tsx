import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import {TodoList} from './components/TodoList'

function App() {
  // const [count, setCount] = useState(0)
                                                                                                                                                                        
  return (
    <div className='w-full h-screen flex '>
      <div className='w-1/3  bg-green-200 flex items-center justify-center  p-10'>
        <TodoForm/>
      </div>
      <div className='w-2/3  bg-blue-200 flex items-center justify-center '>
        <TodoList/>
      </div>

    </div>
  )
}

export default App
