import { cleanup } from "@testing-library/react";
import { describe, afterEach, expect } from "vitest";
import { add_author_by_name, add_book_by_title_and_author_id } from "./utils";
import { library_test } from "../../testing_utils";

describe("use_library", () => {
  afterEach(() => {
    cleanup();
  });
  library_test("add_author_by_name util", ({ authors }) => {
    const mock_author_name = "JRR Mockien";
    const new_authors = add_author_by_name(authors, mock_author_name);

    expect(new_authors.length).toBe(authors.length + 1);
    expect(new_authors[2].name).toBe(mock_author_name);
  });

  library_test("add_book_by_title_and_author_id util", ({ books }) => {
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
