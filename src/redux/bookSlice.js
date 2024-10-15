import { createSlice } from '@reduxjs/toolkit';
import dummyData from './dummydata.json';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: dummyData.books,
    categories: dummyData.categories,
    filteredBooks: dummyData.books,
  },
  reducers: {
    addBook: (state, action) => {
      const newId = Math.max(...state.books.map(book => book.id)) + 1;
      const newBook = { ...action.payload, id: newId };
      state.books.push(newBook);
      state.filteredBooks = state.books;
    },
    filterBooksByCategory: (state, action) => {
      state.filteredBooks = action.payload
        ? state.books.filter(book => book.category === action.payload)
        : state.books;
    },
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { addBook, filterBooksByCategory, searchBooks } = booksSlice.actions;
export default booksSlice.reducer;