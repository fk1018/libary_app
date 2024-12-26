import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, afterEach, vi, expect } from "vitest";
import { AddBook } from "./AddBook";
import { library_test } from "../../testing_utils";

describe("AddBook", () => {
  afterEach(() => {
    cleanup();
  });
  library_test(
    "add button is disabled when author not selected and book title is filled in",
    async ({ authors }) => {
      const mock_book_title = "To Kill a Mocking Bird";

      render(<AddBook authors={authors} on_add_book={vi.fn()} />);
      const input = screen.getByRole<HTMLInputElement>("textbox");
      fireEvent.change(input, { target: { value: mock_book_title } });
      const button = screen.getByRole<HTMLButtonElement>("button");

      expect(button.disabled).toBe(true);
    }
  );
  library_test(
    "add button is disabled when author is selected but book title is empty",
    ({ authors }) => {
      render(<AddBook authors={authors} on_add_book={vi.fn()} />);
      const select_element = screen.getByRole<HTMLSelectElement>("listbox");
      fireEvent.change(select_element, { target: { value: authors[0]["id"] } });
      const button = screen.getByRole<HTMLButtonElement>("button");

      expect(button.disabled).toBe(true);
    }
  );
  library_test(
    "add button is enabled when author selected and book title input has text",
    ({ authors }) => {
      const mock_book_title = "To Kill a Mocking Bird";

      render(<AddBook authors={authors} on_add_book={vi.fn()} />);
      const select_element = screen.getByRole<HTMLSelectElement>("listbox");
      fireEvent.change(select_element, { target: { value: authors[0]["id"] } });
      const input = screen.getByRole<HTMLInputElement>("textbox");
      fireEvent.change(input, { target: { value: mock_book_title } });
      const button = screen.getByRole<HTMLButtonElement>("button");

      expect(button.disabled).toBe(false);
    }
  );
  library_test(
    "book title is cleared when add book button is clicked",
    ({ authors }) => {
      const mock_book_title = "To Kill a Mocking Bird";

      render(<AddBook authors={authors} on_add_book={vi.fn()} />);
      const select_element = screen.getByRole<HTMLSelectElement>("listbox");
      fireEvent.change(select_element, { target: { value: authors[0]["id"] } });
      const input = screen.getByRole<HTMLInputElement>("textbox");
      fireEvent.change(input, { target: { value: mock_book_title } });
      const button = screen.getByRole<HTMLButtonElement>("button");
      fireEvent.click(button);

      expect(input.value).toBe("");
    }
  );
  library_test("on_book_add method to be called 1 time", ({ authors }) => {
    const mock_on_book_add = vi.fn();
    const mock_book_title = "To Kill a Mocking Bird";

    render(<AddBook authors={authors} on_add_book={mock_on_book_add} />);
    const select_element = screen.getByRole<HTMLSelectElement>("listbox");
    fireEvent.change(select_element, { target: { value: authors[0]["id"] } });
    const input = screen.getByRole<HTMLInputElement>("textbox");
    fireEvent.change(input, { target: { value: mock_book_title } });
    const button = screen.getByRole<HTMLButtonElement>("button");
    fireEvent.click(button);

    expect(mock_on_book_add).toBeCalledTimes(1);
  });
});
