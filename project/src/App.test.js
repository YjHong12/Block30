/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navbar from "./components/Navbar";
import { authTest } from "./API";

describe("rendering", () => {
  test("renders the App component", () => {
    render(<App />);
    const title = screen.getByText("Stranger's Things");

    expect(title).toBeInTheDocument();
  });
});

describe("working navbar", () => {
  test("Posts link redirects to /posts", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const postsLink = screen.getByText("Posts");
    expect(postsLink).toHaveAttribute("href", "/posts");
  });
});

describe("authTest functions", () => {
  test("it returns true", async () => {
    const fetchFunction = async () => ({
      json: async () => ({ success: true }),
    });
    const result = await authTest(fetchFunction);
    expect(result).toBe(true);
  });
});
