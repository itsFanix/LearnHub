import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'

function App() {
  const [count, setCount] = useState(0)
                                                                                                                                                                        
  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-1/2 bg-red-500 flex items-center justify-center'>
        <TodoForm/>
      </div>
      <div className='w-1/2 bg-blue-200 flex items-center justify-center'>
       
      </div>

    </div>
  )
}

export default App
