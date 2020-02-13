import React from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>CRUD app with React hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default App