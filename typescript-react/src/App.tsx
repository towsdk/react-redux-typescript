import { type } from 'os';
import { useReducer } from 'react';
import './App.css';

const initialState = {
  count:0,
}
type counter = {
  count:number;
}
const INCREMENT="INCREMENT";
const INCREMENTAMOUNT="INCREMENTAMOUNT";
const DECREMENT="DECREMENT";
const RESET="RESET";

type incrementType ={type: typeof INCREMENT};
type incrementAType ={type: typeof INCREMENTAMOUNT, payload: number};
type decrementType ={type: typeof DECREMENT};
type resetType ={type: typeof RESET};
type actionType = incrementType| incrementAType | decrementType | resetType


const reducer = (state: counter, action: actionType) =>{
  switch(action.type){
  case INCREMENT:
    return {count: state.count + 1};
  case INCREMENTAMOUNT:
    return {count: state.count + action.payload};
  case DECREMENT:
    return {count: state.count - 1};
  case RESET:
    return {count: 0};

    default:
      throw Error();
    
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Count: {state.count}</h1>
      <button onClick={()=>{dispatch({type: INCREMENT})}}>Increment</button>
      <button onClick={()=>{dispatch({type: INCREMENTAMOUNT, payload: 5})}}>Increment</button>
      <button onClick={()=>{dispatch({type: DECREMENT})}}>Decrement</button>
      <button onClick={()=>{dispatch({type: RESET})}}>Reset</button>
    </div>
  );
}

export default App;
