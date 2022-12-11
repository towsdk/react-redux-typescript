import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, restCounter } from '../services-redux/action/Counter';

const Counter = () => {
    const count = useSelector((state)=> state.count);

    const dispatach = useDispatch();

    const handleIncrement = () => {
        dispatach(incrementCounter());
    };
    const handleDecrement = () => {
        dispatach(decrementCounter());
    };
    const handleReset = () => {
        dispatach(restCounter());
    };
  return (
    <div>
        <h2>Counter App</h2>

        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter