import { test } from "vitest";
import { book, author } from "./types/library";

interface library_test_app_state {
  books: book[];
  authors: author[];
}

export const library_test = test.extend<library_test_app_state>({
  books: [
    {
      author: "bar",
      title: "test book two",
      id: "2",
    },
    {
      author: "foo",
      title: "test book one",
      id: "1",
    },
  ],
  authors: [
    { id: "bar", name: "baz" },
    { id: "foo", name: "biz" },
  ],
});
