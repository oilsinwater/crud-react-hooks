// brings in useState import
import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  // dummy data
  const usersData = [
    { id: 1, name: 'Ayoke', username: 'drunkenpasta' },
    { id: 2, name: 'Desmond', username: 'siliconetornado' },
    { id: 3, name: 'Io', username: 'littlemoon' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  // makes state for whether or not edit mode is turned on
  const initialFormState = { id: null, name: '', username: '' }
  // creates some initial empty state for the form
  const [currentUser, setCurrentUser] = useState(initialFormState)
  // applies params to see and update current user being edited, with empty user applied to a currentUser state
  const addUser = user => {
    // function to manually take user object as param, and add them users Array of objects
    user.id = users.length + 1
    // "...users" code ensures that all the previous users remain in the array.
    setUsers([...users, user])
    // completes by appending user to the array
  }

  const editRow = user => {
    // when "Edit" button is selected on a user, it should return the Edit mode, and set the currentUser
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
    // uses ternary operation to map through users and match the id passed through
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    // filters user out by ID
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users
            // passing users variable through props
          } editRow={editRow
            // passing editRow function through props
          } deleteUser={deleteUser
            // passing deleteUser function through props
          } />
        </div>
      </div >
    </div >
  )
}

export default App