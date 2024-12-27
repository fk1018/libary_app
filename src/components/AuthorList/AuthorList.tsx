import { author } from "../../types/library";

export function AuthorList({ authors }: { authors: author[] }) {
  if (!authors || authors.length == 0)
    return (
      <section>
        <h2>No Authors</h2>
      </section>
    );

  const author_list = authors.map((author) => (
    <li key={author.id}>{author.name}</li>
  ));
  return (
    <section>
      <h2>Authors</h2>
      <ul>{...author_list}</ul>
    </section>
  );
}
