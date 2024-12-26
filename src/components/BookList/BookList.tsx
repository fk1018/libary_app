import { book } from "../../types/library";

export function BookList({ books }: { books: book[] }) {
  const book_list = books.map((book) => <li key={book.id}>{book.title}</li>);
  return (
    <>
      <h2>Books</h2>
      <ul>{...book_list}</ul>
    </>
  );
}
