import React, { memo, useMemo } from 'react'

const Message = ({count, messageSend}) => {
    console.log("message rendering");
    const calculatedNumber = useMemo(()=>{
        let number = 0;
        for (let index = 0; index < 600000000; index++) {
            number++;
            
        }
        return number;
    }, []);
   
  return (
    <div>
        <p>number: {calculatedNumber}</p>
        <p>count: {count}</p>
        <button onClick={messageSend}>Message Increase</button>
        </div>
  )
}

export default memo(Message);