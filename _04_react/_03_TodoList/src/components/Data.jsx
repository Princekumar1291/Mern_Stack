import React from 'react'

function Data({data,date}) {

  const deleteItem=()=>{
    console.log("Item deleted");
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
        <button className='btn btn-danger px-3' onClick={deleteItem}>Delete</button>
      </div>
    </div>
  )
}

export default Data
