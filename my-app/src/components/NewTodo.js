import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
 
const NewTodo = (props) => {
    const [todo, setTodo] = useState({title: "", desc: ""});
    const{title, desc}= todo;
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value};
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc: ""});
    };

  return (
    <Form  className='w-50 m-auto' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label htmlFor='title' className='label-form'>title</label>
            <input type='text' id='title' name='title' value={title} onChange={handleChange} className='form-control' />
        </div>
        <div className='form-group mb-3'>
            <label htmlFor='desc' className='label-form'>desc</label>
            <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange} className='form-control'/>
        </div>
        <button type='submit' className='btn btn-danger' name='submit'>Add Todo</button>
    </Form>
  )
}

export default NewTodo;