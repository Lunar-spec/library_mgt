import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../redux/bookSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchBooks(searchTerm));
  };

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    dispatch(searchBooks(newSearchTerm));
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by title or author"
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;