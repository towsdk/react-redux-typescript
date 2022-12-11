import React from 'react'
import ChildToParent from './childToParent';
import ParentToChild from './parentToChild';

const Main = () => {
    const handleClick = (event) => {
        console.log(event);
        
    }
    const clicked = (todo) => {
        console.log(todo);
    } 
  return (
    <div>
        <ChildToParent childToParent={handleClick} second={clicked}/>
        <ParentToChild parentToChild="I am from parents"/>
    </div>
  )
}

export default Main;