import { book } from "../../types/library";

export function BookList({ books }: { books: book[] }) {
  if (!books || books.length == 0)
    return (
      <section>
        <h2>No Books</h2>
      </section>
    );
  const book_list = books.map((book) => <li key={book.id}>{book.title}</li>);
  return (
    <>
      <h2>Books</h2>
      <ul>{...book_list}</ul>
    </>
  );
}
