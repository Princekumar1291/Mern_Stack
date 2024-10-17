import React, { useContext } from 'react'
import Data from './Data'
import AppContext from '../store/AppContext'

function Datas() {
  const {todoData}=useContext(AppContext);
  const {setTodoData}=useContext(AppContext);
  
  return (
    <div>
      {
        todoData.map((data, index) => {
          return <Data data={data.item} date={data.date} key={data.id} id={data.id} setTodoData={setTodoData}/>
        })
      }
    </div>
  )
}

export default Datas
