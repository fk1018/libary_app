import { book } from "../../types/library";

export function add_book_by_title_and_author_id(
  books: book[],
  book_title: string,
  author_id: string
) {
  const new_book: book = {
    id: self.crypto.randomUUID(),
    author: author_id,
    title: book_title,
  };
  return [...books, new_book];
}
