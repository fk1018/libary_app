import { cleanup } from "@testing-library/react";
import { describe, afterEach, test, vi, expect } from "vitest";
import { handle_add_author } from "./utils";

describe("AddAuthor utils", () => {
  afterEach(() => {
    cleanup();
  });
  test("handle_add_author util", () => {
    const mock_set_author_name = vi.fn();
    const mock_on_add_author = vi.fn();

    handle_add_author("Mock Jones", mock_set_author_name, mock_on_add_author);

    expect(mock_on_add_author).toBeCalledTimes(1);
    expect(mock_on_add_author).toBeCalledTimes(1);
  });
});
