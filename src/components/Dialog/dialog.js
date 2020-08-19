import React from "react";
import "./style.css";

const Dialog = (props) => {
  const { title, onCancel, onCreate } = props;
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
        <label htmlFor="tabName">Enter tab name.</label>
        <input
          type="text"
          id="tabName"
          name="tabName"
          value={tab}
          onChange={handleInput}
        />
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleOnCreate}>Create</button>
      </div>
    </dialog>
  );
};

export default Dialog;
