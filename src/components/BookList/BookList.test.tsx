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
    render(<BookList books={[]} />);
    const book_list = await screen.getByRole<HTMLUListElement>("list");

    expect(book_list.children.length).toBe(0);
  });
});
