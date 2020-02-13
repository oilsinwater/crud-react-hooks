import React, { useState, useEffect } from 'react'

const EditUserForm = props => {

  const [user, setUser] = useState(props.currentUser)
  // sets the state directly from currentUser via props
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props]
  // using "[props]" array is similar to using componentDidUpdate.
  // callback function that updates the user state with the new prop that is being sent through
  )

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditUserForm