import React from 'react'
import './App.css'
import axios from 'axios'
import { useEffect,useState } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
      })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
