import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Blogs from './Blogs'
import Contact from './Contact'
import Protected from './Protected'
import Routed from './Routed'

const Index = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Routed />
    {isLoggedIn ? <button onClick={()=> {setIsLoggedIn
    (!isLoggedIn)}}>Log Out</button>:<button onClick={()=> {setIsLoggedIn
        (!isLoggedIn)}}>Log In</button>}
    <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Protected 
        isLoggenIn={isLoggedIn}> <Blogs /></Protected>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Index