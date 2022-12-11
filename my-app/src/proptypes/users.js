import React, { useState } from 'react'
import User from './User';

const Users = () => {
    const [users, setUser]= useState("jewel");

  return (
    <>
    <User userName={users} />
    </>
  )
}

export default Users