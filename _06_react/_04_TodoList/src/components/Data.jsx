import React, { useContext } from 'react'
import AppContext from '../store/AppContext';

function Data({ data, date, id }) {
  const {deleteItem} = useContext(AppContext);

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
