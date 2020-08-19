import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Dialog from "../index";
import pretty from "pretty";
import { act } from "@testing-library/react";

let container = null;

describe("Dialog Component Test", () => {
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

  it("should render dialog warning message.", () => {
    const handleDialogClose = (e) => {};
    const warnTitle = "Warning!";
    const warningMessage = "This is warning message!";
    act(() => {
      render(
        <Dialog
          title={warnTitle}
          type="warn"
          onCancel={handleDialogClose}
          warnMessage={warningMessage}
        />,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
    expect(
      container.querySelector("[data-testid='dialog-title']")
    ).toHaveTextContent(warnTitle);
    expect(
      container.querySelector("[data-testid='warn-message']")
    ).toHaveTextContent(warningMessage);
    expect(
      container.querySelector("[data-testid='cancel-btn']")
    ).toHaveTextContent("Close");
    expect(container.querySelector("[data-testid='create-btn']")).toBeNull();
  });

  it("should render dialog dialog form.", () => {
    const handleDialogClose = (e) => {
      return true;
    };
    const handleDialogCreate = (tabName) => {
      return tabName;
    };
    const dialogTitle = "Add Tab";
    act(() => {
      render(
        <Dialog
          title={dialogTitle}
          type="form"
          onCancel={handleDialogClose}
          onCreate={handleDialogCreate}
        />,
        container
      );
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
    expect(
      container.querySelector("[data-testid='dialog-title']")
    ).toHaveTextContent(dialogTitle);
    expect(container.querySelector("[data-testid='label']")).toHaveTextContent(
      "Enter tab name."
    );
    expect(container.querySelector("[data-testid='input']")).toHaveAttribute(
      "type",
      "text"
    );
    expect(container.querySelector("[data-testid='input']")).toHaveAttribute(
      "id",
      "tabName"
    );
    expect(container.querySelector("[data-testid='input']")).toHaveAttribute(
      "name",
      "tabName"
    );
    expect(
      container.querySelector("[data-testid='cancel-btn']")
    ).toHaveTextContent("Cancel");
    expect(
      container.querySelector("[data-testid='create-btn']")
    ).toHaveTextContent("Create");
    expect(container.querySelector("[data-testid='warn-message']")).toBeNull();
  });
});
