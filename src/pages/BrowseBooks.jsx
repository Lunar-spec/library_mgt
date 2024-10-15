import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { filterBooksByCategory } from '../redux/bookSlice';

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const filteredBooks = useSelector(state => state.books.filteredBooks);
  const categories = useSelector(state => state.books.categories);

  const handleCategoryChange = (category) => {
    dispatch(filterBooksByCategory(category));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Browse Books</h1>
      <SearchBar />
      
      <div className="mb-4">
        <label htmlFor="category-select" className="mr-2">Filter by category:</label>
        <select 
          id="category-select"
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <BookList books={filteredBooks} />
    </div>
  );
};

export default BrowseBooks;