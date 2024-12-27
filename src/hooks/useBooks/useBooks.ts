import { useState } from "react";
import { book } from "../../types/library";
import { add_book_by_title_and_author_id } from "./utils";

export function useBooks() {
  const [books, set_books] = useState<book[]>([]);

  const add_book = async (title: string, author_id: string) => {
    try {
      const updated_books: book[] = add_book_by_title_and_author_id(
        books,
        title,
        author_id
      );
      set_books(updated_books);
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return {
    books,
    add_book,
  };
}
