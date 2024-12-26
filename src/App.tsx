import { AddAuthor } from "./components/AddAuthor/AddAuthor";
import { AddBook } from "./components/AddBook/AddBook";
import { AuthorList } from "./components/AuthorList/AuthorList";
import { BookList } from "./components/BookList/BookList";
import { useAuthors } from "./hooks/useAuthors/useAuthors";
import { useBooks } from "./hooks/useBooks/useBooks";
export function App() {
  const { books, add_book } = useBooks();
  const { authors, add_author } = useAuthors();
  return (
    <>
      <h1>Library App</h1>
      <AddAuthor on_add_author={add_author} />
      <AddBook authors={authors} on_add_book={add_book} />
      <AuthorList authors={authors} />
      <BookList books={books} />
    </>
  );
}
