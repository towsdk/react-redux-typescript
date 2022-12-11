import './App.css';
import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';

const URL = "https://rest-api-without-db.herokuapp.com/users";
const Index = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //Update data

    const [selectedUser, setselectedUser] = useState({
      username: "",
      email: "",
    })

    const [updateFlag, setUpdateFlag] = useState(false);
    const [selectedUserId, setselectedUserId]= useState("");

    const getAllUsers = () => {
        fetch(URL)
          .then((res) => {
            if (!res.ok) {
              throw Error("could not fetch");
            }
            return res.json();
          })
          .then((data) => {
            setUsers(data.users);
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
    useEffect(()=> {
        getAllUsers()
    }, []);

      const handleDelete = (id) => {
        fetch(URL + `/${id}`, {
          method: "DELETE",
        })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not delete");
          }
          getAllUsers();
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    const addUser = (user) =>{
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then ((res) => {
        if(res.status === 201){
          getAllUsers();
        }else{
          throw new Error("Could not create");
        }
      })
    }
    const handleEdit = (id) => {
      setselectedUserId(id);
      setUpdateFlag(true);
      const filterData = users.filter((user)=> user.id === id);
      console.log(filterData[0].username);
      setselectedUser({
        username: filterData[0].username,
        email: filterData[0].email,
      })
    }
    const handleUpdate = (user) => {
      fetch(URL + `/${selectedUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then((res)=> {
        if(!res.ok){
          throw new Error ("failed to update");
        }
        getAllUsers();
        setUpdateFlag(false);
      })
      .catch((err)=>{
        setError(err.message);
      })
    }
  return (
    <div className="App">
    <h1>User Management App 2022</h1>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error}</h2>}
    {updateFlag ? (<UserForm btnTxt="Update User" selectedUser=
    {selectedUser} handleSubmitData={handleUpdate}/>): (
      <UserForm btnTxt="Add-User" handleSubmitData={addUser}/>
    )} 
    <section>
        {users &&
          users.map((user) => {
            const {id, username, email} = user;
            return (
              <article key={id} className="card">
                <p>{id}</p>
                <p>{username}</p>
                <p>{email}</p>
                <button className='btn' onClick={()=>{
                  handleEdit(id)}}>Edit</button>
                <button className='btn' onClick={()=>
                  handleDelete(id)}>Delete</button>
            </article>
        );
    })}
    </section>
    
   
  </div>
  )
};

export default Index