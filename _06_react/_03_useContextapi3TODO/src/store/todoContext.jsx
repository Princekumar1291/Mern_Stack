import { createContext, useState } from "react";

const todoContext=createContext()
export default todoContext


const TodoContextProvider=({children})=>{
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "Learn React",
      date: "2023-08-01",
    },
    {
      id: 2,
      title: "Learn React",
      date: "2023-08-01",
    },
    {
      id: 3,
      title: "Learn React",
      date: "2023-08-01",
    },
  ])

  const addTodoItem=(item)=>{
    setTodoItems([...todoItems, item])
  }

  const deleteTodoItem=(id)=>{
    setTodoItems([...todoItems.filter((item)=>item.id!==id)])
  }
  
  return(
    <todoContext.Provider value={{todoItems, setTodoItems, addTodoItem, deleteTodoItem}}>
      {children}
    </todoContext.Provider>
  )
}

export {TodoContextProvider}