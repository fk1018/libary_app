import { cleanup, renderHook } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import { useAuthors } from "./useAuthors";

describe("useAuthors", () => {
  afterEach(() => {
    cleanup();
  });
  test("returns authors and add_author", () => {
    const { result } = renderHook(() => useAuthors());
    const { authors, add_author } = result.current;

    expect(authors).toEqual([]);
    expect(typeof add_author).toBe("function");
  });
});
