import {React, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import { Button } from 'react-bootstrap';

const User = () => {
    const [serchParam, setSearchParam]= useSearchParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam({name: name});
    };
    const [name, setName] = useState("");
  return (
    <div>
       <h1>User</h1>
       <form onSubmit={handleSubmit}>
        <input type="text" 
        value={name}
        onChange={(e) =>{
            setName(e.target.value);
        } }></input>
        <Button type="submit">Find User</Button>
       </form>
    </div>
  )
}

export default User;