import React from "react";

const ChildToParent = (props) => {
    const handleClicked = (event) =>{
        props.childToParent("i am from child");
        event.preventDefault();
    }
    const todo = " I am from child too";
    props.second(todo);
    return (
        <div>
            <form onSubmit={handleClicked}>
                <input type="submit" value="submit" />
            </form>
            <p>{todo}</p>
        </div>
    )
}

export default ChildToParent;