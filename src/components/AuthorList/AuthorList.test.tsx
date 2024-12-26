import { cleanup, render, screen } from "@testing-library/react";
import { describe, afterEach, expect } from "vitest";
import { AuthorList } from "./AuthorList";
import { library_test } from "../../testing_utils";

describe("AuthorList", () => {
  afterEach(() => {
    cleanup();
  });
  library_test("displays all authors", async ({ authors }) => {
    render(<AuthorList authors={authors} />);
    const author_list = await screen.getAllByRole<HTMLLIElement>("listitem");

    expect(author_list.length).toBe(2);
  });
  library_test("displays no authors", ({}) => {
    render(<AuthorList authors={[]} />);
    const author_list = screen.getByRole<HTMLUListElement>("list");

    expect(author_list.children.length).toBe(0);
  });
});
