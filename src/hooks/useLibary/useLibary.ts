import { useState } from "react";
import { add_author_by_name, add_book_by_title_and_author_id } from "./utils";
import { author, book } from "../../types/library";

export function useLibary() {
  const [authors, set_authors] = useState<author[]>([]);
  const [books, set_books] = useState<book[]>([]);

  const add_author = (name: string) => {
    set_authors(add_author_by_name(authors, name));
  };

  const add_book = (title: string, author_id: string) => {
    set_books(add_book_by_title_and_author_id(books, title, author_id));
  };

  return {
    authors,
    books,
    add_author,
    add_book,
  };
}
