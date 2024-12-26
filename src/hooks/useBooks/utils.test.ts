import { cleanup } from "@testing-library/react";
import { describe, afterEach, expect } from "vitest";
import { library_test } from "../../testing_utils";
import { add_book_by_title_and_author_id } from "./utils";

describe("useBooks utils", () => {
  afterEach(() => {
    cleanup();
  });
  library_test("add_book_by_title_and_author_id", ({ books }) => {
    const mock_book_title = "The Mocking Shard";
    const mock_author_id = "1234";

    const new_books = add_book_by_title_and_author_id(
      books,
      mock_book_title,
      mock_author_id
    );
    const new_book = new_books[2];
    expect(new_books.length).toBe(books.length + 1);
    expect(new_book.title).toBe(mock_book_title);
    expect(new_book.author).toBe(mock_author_id);
  });
});
