import React from 'react'
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'
import { TodoContextProvider } from './store/todoContext'

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <div className='w-full bg-gray-200 border-2  border-gray-600 rounded'>
          <div>
            <Header></Header>
          </div>

          <div className='flex flex-col justify-center text-xl font-semibold border-t-2  border-gray-600 rounded-3xl'>
            <AddItem></AddItem>
            <Items></Items>
          </div>
        </div>
      </TodoContextProvider>
    </>
  )
}

export default App
