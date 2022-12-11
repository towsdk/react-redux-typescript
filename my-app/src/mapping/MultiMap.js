import React from 'react'

const MultiMap = () => {
    const todos = [ 
        {
            id: 1,
            name: "jewel",
            desc: "Lorem word is not working in my react",
            address: [
               {
                 phone: 454,
                house: "kusiara",
            },]
        
        },
        {
            id: 2,
            name: "Hasan",
            desc: "This is another fact of my life.",
            address: [
                {
                  phone: 454,
                 house: "kusiara",
             },]
        
        },
        
    ];
  return (
    <article>
        {todos.map((todo, index)=>
        <div key={index}>
            <h2>{todo.id}</h2>
            <h3>{todo.name}</h3>
            <p>{todo.desc}</p> 
           {todo.address.map((single, index)=>
            <div key={index}>
                <p>{single.phone}</p>
                <p>{single.house}</p>
            </div>
            )}
        </div>)}
    </article>
  )
}

export default MultiMap;