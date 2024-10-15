import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BrowseBooks from "./pages/BrowseBooks";
import Navbar from "./components/Navbar";
import BrowseBooksWithCategory from "./pages/BrowseBooksWithCategory";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooksWithCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App