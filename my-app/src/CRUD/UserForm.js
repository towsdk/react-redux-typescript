import React, { useEffect } from "react";
import ProoTypes from 'prop-types'
import { useState } from "react";

const UserForm = ({handleSubmitData,selectedUser,btnTxt}) => {
    const [user, setUser]= useState({
        username: "",
        email: "",
    });

    const {username, email}= user;

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setUser(prevState => {
            return {...prevState, [fieldName]: fieldValue}
        });
    }
    useEffect(() => {
        setUser({
            username: selectedUser.username,
            email: selectedUser.email,
        });
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitData(user);
        setUser({
            username: "",
            email: "",
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username}
                onChange={handleChange} required />
                </div>
            <div className="field-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email}
                onChange={handleChange} required />
                </div>
                <button name="submit" className="btn1" type="submit">{btnTxt}</button>
        </form>
    )
}

UserForm.defaultProps = {
    selectedUser: {
    username: "",
    email: "",
    },
}

export default UserForm;