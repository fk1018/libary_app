export function handle_add_book(
  author_id: string,
  book_title: string,
  on_add_book: (book_title: string, author_id: string) => Promise<void>,
  set_book_title: (book_title: string) => void
) {
  if (book_title.trim()) {
    on_add_book(book_title.trim(), author_id);
    set_book_title("");
  }
}
