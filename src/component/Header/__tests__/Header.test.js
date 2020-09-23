import React from "react";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header title", () => {
  it("it should render title at top of home screen", () => {
    render(<Header />);
    const title = screen.getByText('', { selector: "div.container-header" });

    expect(title).toBeInTheDocument();
  });
});

