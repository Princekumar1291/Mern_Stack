import React, { useContext } from 'react'
import todoContext from '../store/todoContext'

const Item = ({item}) => {
  const {dispatchTodoItems}=useContext(todoContext)
  
  const deleteItemHandler=(id)=>{
    dispatchTodoItems({type:'DELETE',payload:{id}})
  }
  
  return (
    <div className='flex flex-row justify-between border-b-2 border-gray-600 p-4'>
      <div>{item.title}</div>
      <div>{item.date}</div>
      <button className='bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500' onClick={()=>deleteItemHandler(item.id)}>Delete</button>
    </div>
  )
}

export default Item