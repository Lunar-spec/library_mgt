import BookCard from './BookCard';

const BookList = ({ books }) => {

  console.log(books)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: [],
};

export default BookList;