import React from "react";
import "./style.css";

const Dialog = (props) => {
  const { title, onCancel, onCreate, type, warnMessage } = props;
  const [tab, setTab] = React.useState("");
  const handleInput = (e) => {
    setTab(e.target.value);
  };
  const handleOnCreate = (e) => {
    onCreate(tab);
  };
  return (
    <dialog className="dialog-form" data-testid="dialog-form">
      <h6 data-testid="dialog-title">{title}</h6>
      <div>
        {type === "form" && (
          <>
            <label data-testid="label" htmlFor="tabName">
              Enter tab name.
            </label>
            <input
              data-testid="input"
              type="text"
              id="tabName"
              name="tabName"
              value={tab}
              onChange={handleInput}
            />
          </>
        )}
        {type !== "form" && (
          <p data-testid="warn-message" style={{ color: "red" }}>
            {warnMessage}
          </p>
        )}
        <button data-testid="cancel-btn" onClick={onCancel}>
          {type === "form" ? "Cancel" : "Close"}
        </button>
        {type === "form" && (
          <button data-testid="create-btn" onClick={handleOnCreate}>
            Create
          </button>
        )}
      </div>
    </dialog>
  );
};

export default Dialog;
