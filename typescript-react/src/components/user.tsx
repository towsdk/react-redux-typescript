import React from 'react'

type userProps = {
  user:{
    name: string,
    age: number,
    lang: string[]
  }
};
const User = ({user}:userProps) => {
  return (
    <div style={{ border: "1px solid", margin: "0.5rem" }}>
        <h4>This is {user.name}</h4>
        <h4>This is {user.age}</h4>
        <p>
          {user.lang.map((lang1,index)=>{
           return <span key={index}>{lang1}</span>
          })
          }
        </p>
    </div>
  )
}

export default User