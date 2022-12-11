import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';
import {v4 as uuidv4} from "uuid";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodo)=>{
            return [...prevTodo, {id: uuidv4(),todo}]
        })
    }
    const handleRemoveTodo = (id) => {
        setTodos((prevsTodo)=> {
        const fileteredTodo= todos.filter((todo)=> todo.id !== id);
            return fileteredTodo;
        });
    };
  return (
    <div className='container bg-primary w-50 m-auto'>
        <h1 className='w-50 m-auto'>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;