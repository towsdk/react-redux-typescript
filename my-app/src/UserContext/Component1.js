import React, { useState } from 'react'
import { UserContext } from './UserContext';
import Component2 from './Component2';

const Component1 = () => {
    const [user, setUser] = useState({id: 101, name: "Anisul Islam"});
    const [user1, setUser1] = useState({id: 102, name: "Anisul Islam"});
  return (
    <UserContext.Provider value={{user, user1}}>
        <Component2 />
        </UserContext.Provider>
  )
}

export default Component1;