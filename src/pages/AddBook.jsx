import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector(state => state.books.categories);

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!author) newErrors.author = 'Author is required';
        if (!category) newErrors.category = 'Category is required';
        if (!description) newErrors.description = 'Description is required';
        if (!rating || isNaN(rating) || rating < 0 || rating > 5) {
            newErrors.rating = 'Rating must be a number between 0 and 5';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const newBook = {
                title,
                author,
                category,
                description,
                rating: parseFloat(rating)
            };
            dispatch(addBook(newBook));
            navigate('/books');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>
                <div>
                    <label htmlFor="author" className="block mb-1">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    {errors.author && <p className="text-red-500">{errors.author}</p>}
                </div>
                <div>
                    <label htmlFor="category" className="block mb-1">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select a category</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>
                <div>
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded p-2"
                        rows="4"
                    ></textarea>
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                </div>
                <div>
                    <label htmlFor="rating" className="block mb-1">Rating (0-5)</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="0"
                        max="5"
                        step="0.1"
                        className="w-full border rounded p-2"
                    />
                    {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                </div>
                <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;