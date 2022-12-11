import React, { useCallback, useState } from "react";
import Message from "./memo-folder/Message";



function App() {
  const [count, setCount]=useState(0);
  const [toggle, settoggle]=useState(true);
  const messageSend = useCallback(() =>{
    setCount(count+1);
  },[count]);
  console.log("rendering");
  return (
   <div>
    {toggle? "on":"off"}
    <button onClick={()=>
    {settoggle(!toggle)}}>Toggle</button>
   <p>The count value is: {count}</p>
   <button onClick={()=>{setCount((count)=> count +1)}}>Increase</button>
    <Message count={count} messageSend={messageSend}/>
    </div>
    
  );
}

export default App;
