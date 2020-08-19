import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "../App";
import pretty from "pretty";
import { act } from "@testing-library/react";

let container = null;

describe("App Component Test", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("App component should match snapshot", () => {
    act(() => {
      render(<App />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
