import React, { useState } from 'react'



const AddUserForm = props => {

  // makes some temporary initial state
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    // creates function to update the state within the form
    const { name, value } = event.target
    // even always passed through to any 'on' event in the DOM

    setUser({ ...user, [name]: value })
    // using computed property names to dynamically set the name (using [name]) and value
  }

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Username</label>
      <input type="text" name="username" value="" />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm