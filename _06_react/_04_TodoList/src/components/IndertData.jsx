import React, { useContext, useRef } from 'react'
import AppContext from '../store/AppContext';


function IndertData() {
  const data=useRef();
  const date=useRef();
  const {addData}=useContext(AppContext);
  
  return (
    <div>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Item-name" name='data' ref={data}/>
        </div>
        <div className="col">
          <input type="date" className="form-control" name='date' ref={date}/>
        </div>
        <div className="col">
          <button className='btn btn-success px-4' onClick={()=>addData(data.current.value,date.current.value)} >Add</button>
        </div>
      </div>
    </div>
  )
}

export default IndertData
