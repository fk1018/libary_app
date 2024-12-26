import { useState } from "react";
import { add_author_by_name } from "./utils";
import { author } from "../../types/library";

export function useAuthors() {
  const [authors, set_authors] = useState<author[]>([]);

  const add_author = (name: string) => {
    set_authors(add_author_by_name(authors, name));
  };
  return {
    authors,
    add_author,
  };
}
