import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
    <nav>
        <Link to="/" className="App-link">Home</Link>
        <Link to="/show-books" className="App-link">Show Books</Link>
        <Link to="/add-books" className="App-link">Add Books</Link>
    </nav>
  )
}

export default Navbar