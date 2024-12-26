import { cleanup, renderHook } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import { useLibary } from "./useLibary";

describe("use_library", () => {
  afterEach(() => {
    cleanup();
  });
  test("useLibrary", () => {
    const { result } = renderHook(() => useLibary());
    const { authors, books, add_author, add_book } = result.current;

    expect(authors).toEqual([]);
    expect(books).toEqual([]);
    expect(typeof add_author).toBe("function");
    expect(typeof add_book).toBe("function");
  });
});
