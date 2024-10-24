import React from 'react'

function Data({ data, date, id, setTodoData }) {

  const deleteItem = (id) => {
    setTodoData((prevData)=>{
      return prevData.filter((data)=>{
        return data.id!=id;
      });
    })
  }

  return (
    <div className="row my-3">
      <div className="col">
        {data}
      </div>
      <div className="col">
        {date}
      </div>
      <div className='col'>
        <button className='btn btn-danger px-3' onClick={() => deleteItem(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Data
