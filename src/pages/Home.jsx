import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';

const Home = () => {
  const categories = useSelector(state => state.books.categories);
  const popularBooks = useSelector(state => state.books.books);

  return (
    <div className="container mx-auto px-4">
      <div>
        <h1 className="text-3xl font-bold p-2 text-rose-500 text-center">Welcome to the Online Library</h1>
        <p className="text-sm text-center">Find your next adventure</p>
      </div>
      <div className='flex items-center gap-4'>
        <h2 className="text-2xl font-bold mb-2">Categories:</h2>
        <ul className="mb-4 flex items-center flex-wrap gap-4">
          {categories.map(category => (
            <li key={category} className='px-2 py-1 border shadow-md border-rose-500 rounded-full hover:bg-rose-500 hover:text-white text-rose-500 transition-all duration-200 ease-in-out'>
              <Link to={`/books/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Popular Books</h2>
      <BookList books={popularBooks} />
      <div className="flex items-center justify-center">
        <Link to="/books" className="mt-4 inline-block shadow-md bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">
          View All Books
        </Link>
      </div>
    </div>
  );
};

export default Home;