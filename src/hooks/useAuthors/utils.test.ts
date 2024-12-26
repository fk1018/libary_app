import { cleanup } from "@testing-library/react";
import { describe, afterEach, expect } from "vitest";
import { add_author_by_name } from "./utils";
import { library_test } from "../../testing_utils";

describe("useAuthorsutiles ", () => {
  afterEach(() => {
    cleanup();
  });
  library_test("add_author_by_name", ({ authors }) => {
    const mock_author_name = "JRR Mockien";
    const new_authors = add_author_by_name(authors, mock_author_name);

    expect(new_authors.length).toBe(authors.length + 1);
    expect(new_authors[2].name).toBe(mock_author_name);
  });
});
