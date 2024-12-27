import { cleanup, render, screen } from "@testing-library/react";
import { describe, afterEach, expect } from "vitest";
import { BookList } from "./BookList";
import { library_test } from "../../testing_utils";

describe("BookList", () => {
  afterEach(() => {
    cleanup();
  });
  library_test("displays all books", async ({ books }) => {
    render(<BookList books={books} />);
    const book_list = await screen.getAllByRole<HTMLLIElement>("listitem");

    expect(book_list.length).toBe(2);
  });
  library_test("displays no books", async ({}) => {
    const header_text = "No Books";

    render(<BookList books={[]} />);
    const no_books_heading = await screen.getByRole<HTMLHeadElement>("heading");
    expect(no_books_heading.textContent).toBe(header_text);
  });
});
