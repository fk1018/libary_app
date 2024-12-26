import { AddAuthor } from "./components/AddAuthor/AddAuthor";
import { AddBook } from "./components/AddBook/AddBook";
import { AuthorList } from "./components/AuthorList/AuthorList";
import { BookList } from "./components/BookList/BookList";
import { useLibary } from "./hooks/useLibary/useLibary";
export function App() {
  const { authors, books, add_author, add_book } = useLibary();
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
