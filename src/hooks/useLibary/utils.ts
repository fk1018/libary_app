import { author, book } from "../../types/library";

export function add_author_by_name(authors: author[], author_name: string) {
  const new_author: author = {
    id: self.crypto.randomUUID(),
    name: author_name,
  };
  return [...authors, new_author];
}
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
