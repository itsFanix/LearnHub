import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import {TodoList} from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)
                                                                                                                                                                        
  return (
    <div className='w-full h-screen flex bg-black'>
      <div className='w-1/2  bg-green-200 flex items-center justify-center'>
        <TodoForm/>
      </div>
      <div className='w-1/2  bg-blue-200 flex items-center justify-center'>
        <TodoList/>
      </div>

    </div>
  )
}

export default App
