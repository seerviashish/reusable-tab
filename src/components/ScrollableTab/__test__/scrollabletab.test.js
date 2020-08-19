import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import AddIcon from "../add";
import ClearIcon from "../clear";
import ScrollableTab from "../index";
import LeftIcon from "../left";
import RightIcon from "../right";
import pretty from "pretty";
import { act } from "@testing-library/react";

let container = null;

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

describe("ScrollableTab All Used Icon Component Test", () => {
  it("should match AddIcon snapshot", () => {
    act(() => {
      render(<AddIcon />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("should match ClearIcon snapshot", () => {
    act(() => {
      render(<ClearIcon />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("should match LeftIcon snapshot", () => {
    act(() => {
      render(<LeftIcon />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("should match RightIcon snapshot", () => {
    act(() => {
      render(<RightIcon />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});

describe("ScrollableTab Component Test", () => {
  const tabs = ["Tab-1", "Tab-2", "Tab-3"];
  const currentTabIndex = 0;
  const handleDialogOpen = (e) => {};
  const handlePrev = (e) => {};
  const handleNext = (e) => {};
  const handleRemoveTab = (tabIndex) => {};
  const handleOnSelectTab = (tabIndex) => {};

  it("should match ScrollableTab snapshot", () => {
    act(() => {
      render(
        <ScrollableTab
          tabs={tabs}
          selectedTabIndex={currentTabIndex}
          onSelect={handleOnSelectTab}
          onRemove={handleRemoveTab}
          onNext={handleNext}
          onPrev={handlePrev}
          onAdd={handleDialogOpen}
        />,
        container
      );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
