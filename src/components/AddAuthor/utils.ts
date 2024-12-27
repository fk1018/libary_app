export function handle_add_author(
  author_name: string,
  on_add_author: (author: string) => Promise<void>,
  set_author_name: (author: string) => void
) {
  if (author_name.trim()) {
    on_add_author(author_name.trim());
    set_author_name("");
  }
}
