import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import TabContent from "../index";
import pretty from "pretty";
import { act } from "@testing-library/react";

let container = null;

describe("Tab Content Component Test", () => {
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
  it("should render tab content component.", () => {
    const index = 0;
    const currentTabIndex = 0;
    const tabs = "This is content of tab";
    act(() => {
      render(
        <TabContent key={index} value={currentTabIndex} index={index}>
          <section className="tab-section">
            <h2>Tab Name - {tabs}</h2>
          </section>
        </TabContent>,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
