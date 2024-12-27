import React from 'react'
import './DangerButton.css'

function DangerButton(props) {
  console.log(props);
  return (
    <div>
      <button className="btn btn-danger">Danger</button>
    </div>
  )
}

export default DangerButton
