import React, { useContext } from 'react'
import todoContext from '../store/todoContext'

const AddItem = () => {
  const {addTodoItem} =useContext(todoContext);

  const onformSubmitHandler=(e)=>{
    e.preventDefault()
    const title=e.target.title.value
    const date=e.target.date.value
    if(!title || !date) return
    addTodoItem(title, date)
    e.target.reset()
  }

  return (
    <form className='flex flex-row justify-evenly items-center space-x-4 p-4 border-b-2 border-gray-600' onSubmit={onformSubmitHandler}>
      <div>
        <label htmlFor="title" className='text-2xl font-semibold'>Title </label>
        <input type='text' name='title' id='title' className='p-2 border-2 border-gray-600 rounded-lg' />
      </div>

      <div>
        <label htmlFor="date" className='text-2xl font-semibold'>Date </label>
        <input type="date" name="date" id="date" className='p-2 border-2 border-gray-600 rounded-lg' />
      </div>

      <button className='bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500'>Add Item</button>

    </form>
  )
}

export default AddItem

