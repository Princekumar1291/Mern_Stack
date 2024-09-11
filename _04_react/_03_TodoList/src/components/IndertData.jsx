import React from 'react'

function IndertData() {
  const addData = () => {
    console.log('data added')
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Item-name" name='data'/>
        </div>
        <div className="col">
          <input type="date" className="form-control" name='date'/>
        </div>
        <div className="col">
          <button className='btn btn-success px-4' onClick={addData} >Add</button>
        </div>
      </div>
    </div>
  )
}

export default IndertData
