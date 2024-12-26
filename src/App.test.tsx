import { expect, test, describe, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });
  test("App renders", () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });
});
