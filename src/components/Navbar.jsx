import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-rose-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white hover:underline">Home</Link></li>
        <li><Link to="/books" className="text-white hover:underline">Browse Books</Link></li>
        <li><Link to="/add-book" className="text-white hover:underline">Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;