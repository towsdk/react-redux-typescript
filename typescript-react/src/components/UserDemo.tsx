import { type } from 'os'
import React from 'react'

type userType ={
    users1: {
        name: string;
        id: number;
        lang: string;
        age: number
    }[]
    }
const UserDemo = ({users1}: userType) => {
  return (
    <div >
        {users1.map((user)=>{
            return <div key={user.id} style={{ border: "10px solid", margin: "0.5rem" }}>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
                <h2>{user.lang}</h2>
                <h2>{user.age}</h2>
            </div>
        })}
    </div>
  )
}

export default UserDemo