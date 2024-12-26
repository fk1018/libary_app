import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, afterEach, test, vi, expect } from "vitest";
import { AddAuthor } from "./AddAuthor";

describe("AddAuthor", () => {
  afterEach(() => {
    cleanup();
  });
  test("add button is disabled when no text in author name input", () => {
    render(<AddAuthor on_add_author={vi.fn()}></AddAuthor>);
    const button = screen.getByRole<HTMLButtonElement>("button");

    expect(button?.disabled).toBe(true);
  });
  test("add button is enabled when text in author name input", () => {
    const mock_author_name = "Mock Arthur";

    render(<AddAuthor on_add_author={vi.fn()}></AddAuthor>);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole<HTMLButtonElement>("button");
    fireEvent.change(input, { target: { value: mock_author_name } });

    expect(button?.disabled).toBe(false);
  });
  test("add button clears author input on click", () => {
    const mock_author_name = "Mock Arthur";

    render(<AddAuthor on_add_author={vi.fn()} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole<HTMLButtonElement>("button");
    fireEvent.change(input, { target: { value: mock_author_name } });
    fireEvent.click(button);

    expect(input.value).toBe("");
  });
  test("on_add_author method is called 1 time", () => {
    const mock_on_add_author = vi.fn();
    const mock_author_name = "Mock Arthur";

    render(<AddAuthor on_add_author={mock_on_add_author} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    const button = screen.getByRole<HTMLButtonElement>("button");
    fireEvent.change(input, { target: { value: mock_author_name } });
    fireEvent.click(button);

    expect(mock_on_add_author).toHaveBeenCalledTimes(1);
  });
});
