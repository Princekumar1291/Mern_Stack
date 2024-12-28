import { createContext, useContext, useReducer, useState } from "react";

const todoContext=createContext()
export default todoContext

const todoReducer=(state,action)=>{
  let newState=state;
  if(action.type==="DELETE"){
    newState=state.filter((item)=>item.id!==action.payload.id)
  }
  else if(action.type==="ADD"){
    newState=[...state,action.payload];
  }
  return newState
}

const initialState=[
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
]


const TodoContextProvider=({children})=>{

  const [todoItems,dispatchTodoItems]=useReducer(todoReducer,initialState)

  const addTodoItem=(title,date)=>{
    dispatchTodoItems({
      type:'ADD',
      payload:{id: Date.now(), title, date}
    })
  }

  const deleteTodoItem=(id)=>{
    dispatchTodoItems({
      type:'DELETE',
      payload:{id}
    })
  }
  
  return(
    <todoContext.Provider value={{todoItems,addTodoItem,deleteTodoItem}}>
      {children}
    </todoContext.Provider>
  )
}

export {TodoContextProvider}