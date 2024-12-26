import { author } from "../../types/library";

export function add_author_by_name(authors: author[], author_name: string) {
  const new_author: author = {
    id: self.crypto.randomUUID(),
    name: author_name,
  };
  return [...authors, new_author];
}
