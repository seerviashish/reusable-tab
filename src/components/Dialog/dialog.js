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
    <dialog className="dialog-form">
      <h6>{title}</h6>
      <div>
        {type === "form" && (
          <>
            <label htmlFor="tabName">Enter tab name.</label>
            <input
              type="text"
              id="tabName"
              name="tabName"
              value={tab}
              onChange={handleInput}
            />
          </>
        )}
        {type !== "form" && <p style={{ color: "red" }}>{warnMessage}</p>}
        <button onClick={onCancel}>
          {type === "form" ? "Cancel" : "Close"}
        </button>
        {type === "form" && <button onClick={handleOnCreate}>Create</button>}
      </div>
    </dialog>
  );
};

export default Dialog;
