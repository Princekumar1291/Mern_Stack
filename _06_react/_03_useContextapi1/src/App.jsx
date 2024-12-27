import React, { createContext, useState } from 'react'
import A from './components/A'

const UserContext = createContext();

const App = () => {

  const [user, setUser] = useState({
    name: "Prince",
    email: "BtH8e@example.com",
    phone: "1234567890"
  })

  return (
    <>
      <UserContext.Provider value={user}>
        <A></A>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}

