import  { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { filterBooksByCategory } from '../redux/bookSlice';

const BrowseBooksWithCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const filteredBooks = useSelector(state => state.books.filteredBooks);

  useEffect(() => {
    dispatch(filterBooksByCategory(category));
  }, [category, dispatch]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold p-2 text-rose-500 text-center">Browse {category} Books</h1>
      <SearchBar />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BrowseBooksWithCategory;