/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"

describe("rendering", () => {
    test("renders the App component", () => {
        render(<App />);
        const title = screen.getByText("Stranger's Things")

        expect(title).toBeInTheDocument();
    })
})