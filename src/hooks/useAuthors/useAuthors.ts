import { useState } from "react";
import { add_author_by_name } from "./utils";
import { author } from "../../types/library";

export function useAuthors() {
  const [authors, set_authors] = useState<author[]>([]);

  const add_author = async (name: string) => {
    try {
      const updated_authors = await add_author_by_name(authors, name);
      set_authors(updated_authors);
    } catch (error) {
      console.error("Failed to add author:", error);
    }
  };
  return {
    authors,
    add_author,
  };
}
