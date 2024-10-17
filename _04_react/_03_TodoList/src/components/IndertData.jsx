import React, { useRef } from 'react'
const formatDate = (rawDate) => {
  const dateObj = new Date(rawDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = dateObj.getFullYear();
  return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
};

function IndertData({setTodoData}) {
  const data=useRef();
  const date=useRef();
  const addData = () => {
    console.log(data.current.value);
    console.log(date.current.value);
    let Idata=data.current.value;
    let Idate=formatDate(date.current.value);
    if(Idata && Idate)setTodoData((prev)=>[...prev,{id:prev.length+1,item:Idata,date:Idate}])
      data.current.value="";
      date.current.value="";
  }
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
          <button className='btn btn-success px-4' onClick={addData} >Add</button>
        </div>
      </div>
    </div>
  )
}

export default IndertData
