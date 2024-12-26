import { cleanup } from "@testing-library/react";
import { describe, afterEach, test, vi, expect } from "vitest";
import { handle_add_book } from "./utils";

describe("AddBook utils", () => {
  afterEach(() => {
    cleanup();
  });
  test("handle_add_book", () => {
    const mock_on_add_book = vi.fn();
    const mock_set_book_title = vi.fn();

    handle_add_book("123", "Mock You", mock_on_add_book, mock_set_book_title);

    expect(mock_on_add_book).toBeCalledTimes(1);
    expect(mock_set_book_title).toBeCalledTimes(1);
  });
});
