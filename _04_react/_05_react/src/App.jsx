import React from 'react'

function App() {
  const todoItems=[
    {
      id: 1,
      item: 'Item 1',
      date: '10-02-2023',
    },
    {
      id: 2,
      item: 'Item 2',
      date: '11-02-2023',
    },
    {
      id: 3,
      item: 'Item 3',
      date: '12-02-2023',
    },
  ]
  return (
    <div className="App text-green-700 text-3xl font-bold">
      <ol className='list list-decimal list-inside m-6 border border-green-700'>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
        <li>List 4</li>
      </ol>
    </div>
  )
}

export default App
