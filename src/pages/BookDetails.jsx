import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User, Star, ArrowLeft } from 'lucide-react';
import { Hexagon } from 'lucide-react';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state =>
    state.books.books.find(b => b.id === parseInt(bookId))
  );

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Book not found</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 inline-flex items-center"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-rose-600">{book.title}</h1>
          <div className="flex items-center mb-4">
            <User className="text-gray-500 mr-2" size={20} />
            <p className="text-xl text-gray-700">By {book.author}</p>
          </div>
          <div className="flex items-center mb-4">
            <Hexagon className="text-gray-500 mr-2" size={20} />
            <p className="text-lg text-gray-600">Category: <span className='bg-rose-500/80 px-2 py-1 text-sm text-white rounded-full'>
              {book.category}</span></p>
          </div>
          <div className="flex items-center mb-6">
            <Star className="text-yellow-400 mr-2" size={20} />
            <p className="text-lg font-semibold">Rating: {book.rating}/5</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Description</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition duration-300 inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;