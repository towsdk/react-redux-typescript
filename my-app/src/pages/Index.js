import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/404';
import Navbar from './pages/Navbar1';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import User from './pages/User';




function Index() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
             <Route path="/"  element={<Home />}  />
             <Route path="/contact"  element={<Contact />}  />
             <Route path="/about"  element={<About />}  />
             <Route path='/blogs' element={<Blogs />} />
             <Route path='/user' element={<User />} />
             <Route path='/blogs/:title' element={<Blog />} />
             <Route path="/*"  element={<Error />}  />
        </Routes>
    </BrowserRouter>
    
  );
}

export default Index;
