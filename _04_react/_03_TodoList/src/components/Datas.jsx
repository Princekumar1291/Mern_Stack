import React from 'react'
import Data from './Data'

function Datas({todoData}) {
  return (
    <div>
      {
        todoData.map((data, index) => {
          return <Data data={data.item} date={data.date} key={data.id}/>
        })
      }
    </div>
  )
}

export default Datas
