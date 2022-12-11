import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const Component4 = () => {
    const {user, user1}= useContext(UserContext);
  return (
    <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user1.id}</p>
        <p>{user1.name}</p>
    </div>
  )
}

export default Component4