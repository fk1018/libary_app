import { cleanup, renderHook } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import { useBooks } from "./useBooks";

describe("useBooks", () => {
  afterEach(() => {
    cleanup();
  });
  test("returns books and add_book", () => {
    const { result } = renderHook(() => useBooks());
    const { books, add_book } = result.current;

    expect(books).toEqual([]);
    expect(typeof add_book).toBe("function");
  });
});
