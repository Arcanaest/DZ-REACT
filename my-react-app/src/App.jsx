import { useState } from 'react'
import './App.css'
import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import Task4 from './components/task4';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Task1 />
      </div>
      <div>
        <Task2 />
      </div>
      <div>
        <Task3 />
      </div>
      <div>
        <Task4 />
      </div>
      
    </>
  )
}

export default App
