import React from 'react';
import { Nav } from 'react-bootstrap/Nav';
import {Link, NavLink} from "react-router-dom";
import './App.css';

const Navbar = () => {
  return (
    <nav >
        <NavLink  to="/" className="nav-link">Home</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
        
    </nav>
  )
}

export default Navbar;