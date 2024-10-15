import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-xs font-semibold px-1 py-0.5 bg-rose-500 w-max rounded-full text-white">{book.category}</p>
      <p className="mt-2">Rating: {book.rating}/5</p>
      <Link to={`/book/${book.id}`} className="mt-2 inline-block bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">
        View Details
      </Link>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;