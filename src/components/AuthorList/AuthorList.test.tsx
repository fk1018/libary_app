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
  library_test("displays no authors", async ({}) => {
    const header_text = "No Authors";

    render(<AuthorList authors={[]} />);
    const no_authors_heading = await screen.getByRole<HTMLHeadElement>(
      "heading"
    );
    expect(no_authors_heading.textContent).toBe(header_text);
  });
});
