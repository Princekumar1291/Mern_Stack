import { useEffect, useState } from 'react'
import './App.css'
import Users from './Users';

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      // if (data.lenght > 0) {
        setUsers(data);
      // }
      // console.log(data)
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    let isMounted = true; // Add a variable to track component mount status

    // Fetch data only if the component is still mounted
    if (isMounted) {
      fetchUsers(API);
    }

    // Cleanup function to abort the fetch if the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [])

  return (
    <>
      <h1>React Table</h1>
      <table border={"2px"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <Users users={users}/>
        </tbody>
      </table>
    </>
  )
}

export default App
