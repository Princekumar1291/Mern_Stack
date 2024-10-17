import { useState } from "react"
import AppContext from "./AppContext"

const AppProvider = ({children}) => {
  const formatDate = (rawDate) => {
    const dateObj = new Date(rawDate);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
  };
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
  const addData = (todoData,todoDate) => {
    if(todoData && todoDate) setTodoData((prev)=>[...prev,{id:prev.length+=1,item:todoData,date:todoDate}])
  }
  const deleteItem = (id) => {
    setTodoData((prevData)=>{
      return prevData.filter((data)=>{
        return data.id!=id;
      });
    })
  }
  const contextValue={
    todoData,
    setTodoData,
    addData,
    deleteItem
  }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider