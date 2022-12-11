import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../layouts/Navbar'
import BooksView from '../features/books/BooksView'
import Home from '../pages/Home'
import Error from '../pages/Error'
import AddBook from '../features/books/AddBook'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-books" element={<AddBook />}/>
        <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Index;