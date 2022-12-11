import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        console.log("useEffect");
    }, [count])
  return (
    <div>
        {console.log("rendering")}
        <h3>{count}</h3>
        <button onClick={() => {
        setCount((count) => count + 1);
    }}>+</button>
        <button onClick={() => {
        setLoading(!loading);
    }}>isLoasding</button>
    </div>
  )
}

export default UseEffect;