import { author } from "../../types/library";

export function AuthorList({ authors }: { authors: author[] }) {
  const author_list = authors.map((author) => (
    <li key={author.id}>{author.name}</li>
  ));
  return (
    <>
      <h2>Authors</h2>
      <ul>{...author_list}</ul>
    </>
  );
}
