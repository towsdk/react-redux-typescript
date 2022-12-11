import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {  
const books = useSelector((state)=> state.booksReducer.books);
  return (
   <div>
     <h1>List of Books </h1>
    <table>
      <thead>
        <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books && books.map((book)=>{
          const {id, title, name} = book;
          return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{name}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
   </div>
  )
}

export default BooksView