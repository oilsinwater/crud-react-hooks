import React from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  // dummy data 
  const usersData = [
    { id: 1, name: 'Ayoke', username: 'drunkenpasta' },
    { id: 2, name: 'Desmond', username: 'siliconetornado' },
    { id: 3, name: 'Io', username: 'littlemoon' },
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD app with React hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
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