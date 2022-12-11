import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Routed = () => {
  return (
    <nav>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
        <Link to="/blog" className='nav-link'>Blogs</Link>

    </nav>
  )
}

export default Routed