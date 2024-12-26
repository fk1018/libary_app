import { useState } from "react";
import { handle_add_author } from "./utils";

export function AddAuthor({
  on_add_author,
}: {
  on_add_author: (author: string) => void;
}) {
  const [author_name, set_author_name] = useState("");

  return (
    <>
      <h3>Add an author</h3>
      <label htmlFor="add-author">Author Name:</label>
      <input
        type="text"
        id="add-author"
        value={author_name}
        onChange={(e) => set_author_name(e.target.value)}
      />
      <button
        disabled={!author_name}
        onClick={() =>
          handle_add_author(author_name, set_author_name, on_add_author)
        }
      >
        Add Author
      </button>
    </>
  );
}
