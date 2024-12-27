import React, { useContext } from 'react'
import Item from './Item'
import todoContext from '../store/todoContext'

const Items = () => {
  const { todoItems } = useContext(todoContext)
  return (
    <div className='w-full'>
      {
        todoItems.map((item) => {
          return <Item key={item.id} item={item}></Item>
        }
        )
      }
    </div>
  )
}

export default Items
