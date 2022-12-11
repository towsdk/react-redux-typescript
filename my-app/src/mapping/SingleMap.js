import React from 'react'

const SingleMap = () => {
    const todo = [ 
        {
            id: 1,
            name: "jewel",
            desc: "Lorem word is not working in my react",
        },
        {
            id: 2,
            name: "Hasan",
            desc: "This is another fact of my life."
        }
    ];
  return (
    <>
    {todo.map((single, index) => 
    <div key={index}>
    <p>{single.name}</p>
    <h3>{single.desc}</h3>
    </div>
    )}
    </>
  )
}

export default SingleMap;