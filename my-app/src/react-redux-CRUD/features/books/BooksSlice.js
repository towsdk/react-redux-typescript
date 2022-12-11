const { createSlice } = require("@reduxjs/toolkit")
// const { v4: uuidv4 } = require("uuid");
const initialBooks = {
    books: [
      { id: 1, title: "Love Bangladesh", author: "Anisul Islam" },
      { id: 2, title: "Bangladeshi", author: "Anisul Islam" },
    ],
  };
export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
   reducers: {
    showBooks: (state)=> state,
    addBook: (state, action) => {
        state.books.push(action.payload);
    }
   }
})
export const {showBooks, addBook} = booksSlice.actions;
export default booksSlice.reducer;
