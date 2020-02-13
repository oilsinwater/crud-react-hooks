// brings in useState import
import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  // dummy data
  const usersData = [
    { id: 1, name: 'Ayoke', username: 'drunkenpasta' },
    { id: 2, name: 'Desmond', username: 'siliconetornado' },
    { id: 3, name: 'Io', username: 'littlemoon' },
  ]

  const [users, setUsers] = useState(usersData)
  
  

// maps the user data sent through and their properties, or display if none
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App