import { useState } from "react";
import { book } from "../../types/library";
import { add_book_by_title_and_author_id } from "./utils";

export function useBooks() {
  const [books, set_books] = useState<book[]>([]);

  const add_book = (title: string, author_id: string) => {
    set_books(add_book_by_title_and_author_id(books, title, author_id));
  };

  return {
    books,
    add_book,
  };
}
