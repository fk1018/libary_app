import { useState } from "react";
import { handle_add_book } from "./utils";
import { author } from "../../types/library";

export function AddBook({
  authors,
  on_add_book,
}: {
  authors: author[];
  on_add_book: (book_title: string, author_id: string) => Promise<void>;
}) {
  const [author_id, set_author_id] = useState<string>("");
  const [book_title, set_book_title] = useState<string>("");
  return (
    <section>
      <h3>Add a book</h3>
      <label htmlFor="book-title">Book Title:</label>
      <input
        type="text"
        id="book-title"
        name="book-title"
        value={book_title}
        onChange={(e) => set_book_title(e.target.value)}
      />
      <label htmlFor="authors-list">Author:</label>
      <select
        name="authors-list"
        id="authors-list"
        onChange={(e) => set_author_id(e.target.value)}
        role="listbox"
      >
        <option></option>
        {...authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <button
        disabled={!author_id || !book_title}
        onClick={() =>
          handle_add_book(author_id, book_title, on_add_book, set_book_title)
        }
      >
        Add Book
      </button>
    </section>
  );
}
