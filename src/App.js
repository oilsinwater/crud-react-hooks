// brings in useState import
import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  // dummy data
  const usersData = [
    { id: 1, name: 'Ayoke', username: 'drunkenpasta' },
    { id: 2, name: 'Desmond', username: 'siliconetornado' },
    { id: 3, name: 'Io', username: 'littlemoon' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    // function to manually take user object as param, and add them users Array of objects
    user.id = users.length + 1
    // "...users" code ensures that all the previous users remain in the array.
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
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