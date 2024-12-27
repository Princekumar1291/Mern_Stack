import React, { useContext } from 'react'
import { UserContext } from '../App'

const C = () => {
  const user=useContext(UserContext)
  return (
    <div>
      {user.name} <br />
      {user.email} <br />
      {user.phone} <br />
    </div>
  )
}

export default C
