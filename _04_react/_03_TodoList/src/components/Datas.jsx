import React from 'react'
import Data from './Data'

function Datas({todoData,setTodoData}) {
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
