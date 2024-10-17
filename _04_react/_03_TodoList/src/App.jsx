import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import IndertData from './components/IndertData'
import Datas from './components/Datas'
import { useState } from 'react'
function App() {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      item: 'Data 1',
      date: '10-02-2023',
    },
    {
      id: 2,
      item: 'Data 2',
      date: '11-02-2023',
    },
    {
      id: 3,
      item: 'Data 3',
      date: '12-02-2023',
    },
  ])
  return (
    <div className='flex justify-content-center align-items-center myclass'>
      <Heading/>
      <IndertData setTodoData={setTodoData}/>
      <Datas todoData={todoData} setTodoData={setTodoData}></Datas>
    </div> 
  )
}

export default App
